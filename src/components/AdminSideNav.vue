<template>
<div>
<b-sidebar id="sidebar-no-header" v-model='visible'
aria-labelledby="sidebar-no-header-title"
bg-variant="white"
width="21%"
class="border border-dark"
no-header shadow>
<div class="sidebar-top">
<b-img v-bind="profileImg" rounded="circle" alt="Profile Image" src=""
class="mb-2">
</b-img>
<div class="text-dark">
<p>Josh Doe</p>
<p id="email"> <i>j.doe@enyata.com</i> </p>
</div>
</div>
<div class="sidebar-body text-left p-3">
<nav class="mb-3">
<b-nav vertical>
<b-nav-item href="#" active class="admin-menu">
<img src="../assets/dashboard.svg" alt="" class="mr-3 d-inline-block">
Dashboard
</b-nav-item>
<b-nav-item href="#" >
<img src="../assets/create_application.svg" alt="" class="mr-3 d-inline-block">
Create Application
</b-nav-item>
<b-nav-item href="#" >
<img src="../assets/application_entries.svg" alt="" class="mr-3 d-inline-block">
Application Entries
</b-nav-item>
<b-nav-item href="#" >
<img src="../assets/compose_assessment.svg" alt="" class="mr-3 d-inline-block">
Compose Assessment
</b-nav-item>
<b-nav-item href="#" >
<img src="../assets/assessment_history.svg" alt="" class="mr-3 d-inline-block">
Assessment History
</b-nav-item>
<b-nav-item href="#" >
<img src="../assets/results.svg" alt="" class="mr-3 d-inline-block">
Results
</b-nav-item>
</b-nav>
</nav>
</div>
</b-sidebar>
</div>
</template>

<script>
export default {
  name: 'AdminSideNav',
  data() {
    return {
      visible: true,
      profileImg: {
        blank: true, blankColor: '#777', width: 100, height: 100, class: 'mt-4',
      },
    };
  },
};
</script>

<style scoped>
.sidebar-top {
background-color: #5ABEFD;
padding-bottom: 20px;
}
p {
font-size: 20px;
font-weight: 700;
color: #2B3C4E;
font-family: Lato;
font-style: normal;
font-size: 20px;
line-height: 24px;
}
#email {
font-size: 16px;
font-weight: 400;
line-height: 19px;
}
.sidebar-body {
font-size: 16px;
font-weight: 400;
/* font-family: Lato; */
}
a {
color: #2B3C4E;
border-left: 4px solid transparent;
}
a:hover {
color: #2B3C4E;
/* background: cadetblue; */
font-weight: 550;
border-left-color: #31D283;
}
</style>
