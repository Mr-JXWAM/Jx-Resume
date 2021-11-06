<template>
   <div class="AppVue">
    <!-- <PersonalInformation></PersonalInformation> -->
    <PersonalInformationTest></PersonalInformationTest>
    <PersonalAdvantage></PersonalAdvantage>
    <WorkTime></WorkTime>
    <PojectTwo></PojectTwo>
    <PojectThree></PojectThree>
    <OperationalExperience></OperationalExperience>
    <TopNavBar></TopNavBar>
    <NineBoxImg></NineBoxImg>

   </div>
</template>

<script>
import PersonalInformation from "./components/PersonalInformation.vue";
import PojectTwo from "./components/PojectTwo.vue";
import PersonalAdvantage from "./components/PersonalAdvantage.vue";
import PojectThree from "./components/PojectThree.vue";
import WorkTime from "./components/PorkTime.vue";
import OperationalExperience from "./components/OperationalExperience.vue"
import TopNavBar from './components/TopNavBar.vue'
import PersonalInformationTest from "./components/PersonalInformationTest.vue"
import NineBoxImg from "./components/NineBoxImg/NineBoxImg.vue"

export default {
  name: "App",
  components: {
    PersonalInformation,
    PojectTwo,
    PersonalAdvantage,
    PojectThree,
    WorkTime,
    OperationalExperience,
    TopNavBar,
    PersonalInformationTest,
    NineBoxImg,
  },
};
</script>


<style lang="css">
  .AppVue{
    /* width: 200vh; */
  }

</style>