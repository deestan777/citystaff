<template>
  <div id="app">
    <div class="flags">
      <a @click="setLocale('ru')" href="#">
        <flag class="locale" iso="ru"></flag>
      </a>
      <a @click="setLocale('ua')" href="#">
        <flag class="locale" iso="ua"></flag>
      </a>
      <a @click="setLocale('en')" href="#">
        <flag class="locale" iso="gb"></flag>
      </a>
    </div>
    <img alt="Vue logo" src="@/assets/logo.png"/>
    <HelloWorld :msg="$t('welcomeMsg')"/>
    <div id="nav">
      <router-link to="/">{{ $t("homeLink") }}</router-link>
      |
      <router-link to="/recruiters">{{ $t("recruitersLink") }}</router-link>
      <router-link to="/charity">{{ $t("charityLink") }}</router-link>
      <router-link to="/about">{{ $t("aboutLink") }}</router-link>
      <router-link to="/contacts">{{ $t("contactsLink") }}</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import HelloWorld from "./components/HelloWorld";
  import "./less/app.less";

  export default {
    name: "app",
    components: {
      HelloWorld
    },
    methods: {
      setLocale(locale) {
        this.$i18n.locale = locale;
      }
    }
  };
</script>

<style lang="less"></style>
