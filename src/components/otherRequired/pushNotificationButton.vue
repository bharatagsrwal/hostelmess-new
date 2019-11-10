<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="700"
    >
      <template v-slot:activator="{ on }">
        <v-btn icon
            text
          v-on="on"
          class="hidden-md-and-up"
        >
           <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-btn 
        class = "hidden-sm-and-down"
            text
          v-on="on"
        >
          <span>Push Notification</span>
        </v-btn>
      </template>

      <v-card>
        <v-card-title
        >
          Allow Us to send Push Notification
        </v-card-title>

        <v-card-text>
            <p>We send You Push Notification on time based.</p>
            <div class="text--primary">
                <p>07:20 AM => Breakfast</p>
                <p>11:50 AM => Lunch</p>
                <p>04:20 PM => Snacks</p>
                <p>07:20 PM => Dinner</p>
            </div>
            <p><span class="font-weight-bold text--primary">Status: </span>{{ status }}</p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="requestPermission"
          >
          {{ buttonText }}
          </v-btn>
          <v-btn
            color="error"
            text
            @click="dialog = false"
          >
            close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// import{ mapMutations } from 'vuex';
  export default {
    name:"PushNoti",
    data(){
      return {
        dialog : false,
        status : "Not Granted Yet",
        buttonText : "Allow"
      }
    },
    // TODO: Notification to be implemented
    methods:{
      // checkPer(result){
      //   this.buttonText = result
      //   if (result == "granted") {
      //     this.status = "You Granted Permission";
      //   } else if (result == "denied") {
      //     this.status = "You Denied Permission";
      //   } else {
      //     this.buttonText = " 
      //     this.status = "Please Allow Us to send Notifications for Better Experience";
      //   }
      // },
      requestPermission(){
        // Notification.requestPermission().then((result)=>{
        //   this.checkPer(result);
        // })
        alert("Notification will be implemented");
      },
    },
    mounted(){
      // this.checkPer(Notification.permission)
    }
  }
</script>