<template>
  <div>
    <div class="info">
      <h1 class="name">{{ name }}</h1>
      <p>
        电话: <strong class="tel">{{ tel }}</strong>
        邮件: <strong class="email">{{ email }}</strong>
      </p>
      <div class="blogs">
        个人主页: <strong><a :href="website">{{ website }}</a></strong>
      </div>
      <div class="links">
        Github: <strong><a :href="github">{{ github }}</a></strong>
      </div>
    </div>

    <div class="edu">
      <h4>教育背景</h4>
      <hr>
      <List :source="edus"></List>
    </div>

    <div v-if="interns" class="interns">
      <h4>工作经历</h4>
      <hr>
      <List :source="works"></List>
    </div>

    <div v-if="interns" class="interns">
      <h4>实习经历</h4>
      <hr>
      <List :source="interns"></List>
    </div>

    <div class="projects">
      <h4>个人项目</h4>
      <hr>
      <List :source="projects"></List>
    </div>

    <div class="skills">
      <h4>技能清单</h4>
      <hr>
      <Skills :skills="skills"></Skills>
    </div>

  </div>
</template>

<script>
import List from './List';
import Skills from './Skills';
import info from '../assets/info';

export default {
  name: 'Home',
  data() {
    return info
  },
  components: {
    List,
    Skills
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.info {
  .name {
    text-align: center;
  }

  p {
    text-align: center;
  }

  .links, .blogs {
    text-align: center;
  }
}

a {
  color: #42b983;
  text-decoration: none;
}
</style>
