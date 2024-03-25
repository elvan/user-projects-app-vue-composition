<template>
  <main>
    <user-list :users="activeUsers" @list-projects="selectUser"></user-list>
    <projects-list :user="selectedUser"></projects-list>
  </main>
</template>

<script>
import { ref } from 'vue';
import ProjectsList from './components/projects/ProjectsList.vue';
import UserList from './components/users/UserList.vue';
import USER_DATA from './dummy-data.js';

export default {
  components: {
    UserList,
    ProjectsList,
  },
  setup() {
    const selectedUser = ref(null);
    const activeUsers = USER_DATA;

    function selectUser(uid) {
      selectedUser.value = activeUsers.find((usr) => usr.id === uid);
    }

    return { selectedUser, activeUsers, selectUser };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}

main {
  display: flex;
  justify-content: space-around;
}

button {
  margin: 0.5rem 0.5rem 0.5rem 0;
  padding: 0.5rem 1.5rem;
  border: 1px solid #00006b;
  color: #00006b;
  font: inherit;
  cursor: pointer;
  background-color: transparent;
}

button:hover,
button:active {
  background-color: #efefff;
}

button.selected {
  color: white;
  background-color: #00006b;
}
</style>
