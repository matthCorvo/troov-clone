<template>

	<nav :style="{ background }">
		<div class="d-flex  top-bar ">
				<router-link to="/" class="mx-3">
					<img :src="imagePath" height="57px"  />
				</router-link>
				<div @click="toggleNav">
					<i class="fas fa-stream mt-3"></i>
				</div>
		</div>

		<ul :style="{ background }" ref="nav">
			<div class="image-logo">
				<router-link to="/">
					<img :src="imagePath" height="57px"  />
				</router-link>
			</div>
			
			<li v-for="(link, index) in navLinks"
				:key="index"
				@click="toggleNav">

				<router-link :to="link.path">
					{{ link.title }}
					<i :class="link.icon" />
				</router-link>

			</li>

			<li  v-if="!isLoggedIn" @click="toggleNav">
          		<router-link to="/login" >
				  connexion
				  <i class="fas fa-user-circle"></i>
				</router-link>
			</li>
			<li  v-if="isLoggedIn" @click="toggleNav">
				<router-link to="/profile">
				Mon compte
				<i class="fas fa-user-circle"></i>
				</router-link>
			</li>
			<li class="logout" v-if="isLoggedIn" @click="toggleNav">
				<a to="/logout"  @click.prevent="logoutUser">
				Déconnexion
				<i class="fas fa-user-alt-slash"></i>
				</a>
			</li>
			<li  >
				<a><input placeholder="Rechercher" >
				<i class="fas fa-search"></i>
				</a>
			</li>

		</ul>
	</nav>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	 computed: {
    ...mapGetters(["isLoggedIn"])
  },
  
	props: ['navLinks', 'background',  'imagePath'],
	methods: {
		toggleNav () {
			const nav = this.$refs.nav.classList
			nav.contains('active') ? nav.remove('active') : nav.add('active')
		},
			...mapActions(["logout"]),
			logoutUser() {
			  this.logout();
			}
	}
}
</script>

<style scoped lang="scss">
nav {
	height: 60px;
	width: 100%;
	box-shadow: 2px 2px 2px #CCC;
	.top-bar {
		display: none !important;
	}
	ul {
		display: flex;
		height: 100%;
		align-items: center;
		margin-block-start: 0;
		margin-block-end: 0;
		padding-inline-start: 0;
		box-shadow: 2px 2px 2px #CCC;
		.image-logo {
			cursor: pointer;
			margin: 0 20px 0 20px;
		}
		
		i {
			margin-right: 10px;
			font-size: 22px;
		}
		li {
			list-style-type: none;
			padding: 10px 20px;
				a {
				text-decoration: none;
				display: flex;
				flex-direction: row-reverse;
				align-items: center;
				color: #ffffff!important;
					&:hover {
					background-color: #fff;
					color:black !important;
					padding: 10px 20px;
            		}
		}
		}
		.logout{
			cursor: pointer;
		}
		input{
			border-bottom: 3px solid white;
			background-color:transparent;
			color: white;
			border-top: none;
			border-right: none;
			border-left: none;
			&:hover {
			color: black !important;
			border-top: none;
			border-right: none;
			border-left: none;
			border-bottom: 3px solid rgb(0, 0, 0);

			}
		}
	}
}
// Sidebar
@media screen and (max-width: 768px) {
	nav {
	.top-bar {
		display: block !important;
		display: flex !important;
	}
		.fa-stream{
			color: white;
			font-size: 20px;
		}
		.fa-user-alt-slash{
			font-size: 18px;
		}
		ul {
			position: absolute;
			width: 300px;
			z-index: 1;
			flex-direction: column;
			left: -240px;
			transition: 300ms ease all;
			top: 60px;
			&.active {
				left: 0px;
			}
			.image-logo  {
				display: none;
			}
			
			li {
				width: 100%;
				padding-left: 0;
				padding-right: 0;
			}
			a {
				flex-direction: row !important;
				margin-left: 20px;
				justify-content: space-between;
				margin-right: 13px;
			}
		}
	}
}
</style>