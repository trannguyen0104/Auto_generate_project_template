<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col cols="12" sm="6" class="col">
        <div class="s1">
          <v-tabs
            v-model="tab"
            background-color="transparent"
            color="#00ccff"
            grow
          >
            <v-tab value="one" class="newpro">New Project</v-tab>
            <v-tab value="two" class="opee">Open Example</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="one">
                Application
                <br />
                <v-radio-group v-model="radioGroup" row class="radio">
                  <v-radio label="Blank" value="blank" color="pink"></v-radio>
                  <v-radio label="GUI" value="gui" color="pink"></v-radio>
                  <v-radio label="API" value="webapi" color="pink"></v-radio>
                  <v-radio label="Mobile" value="mobile" color="pink"></v-radio>
                </v-radio-group>
              </v-window-item>

              <v-window-item value="one">
                Framework
                <br />
                <v-radio-group v-model="groupFramework" row class="framework">
                  <v-radio
                    label="Katalon"
                    value="katalon"
                    color="secondary"
                  ></v-radio>
                  <v-radio
                    label="Cypress"
                    value="cypress"
                    color="secondary"
                  ></v-radio>
                  <v-radio
                    label="Robot Framework"
                    value="robot"
                    color="secondary"
                  ></v-radio>
                  <v-radio
                    label="Others"
                    value="others"
                    color="secondary"
                  ></v-radio>
                </v-radio-group>
              </v-window-item>

              <v-window-item value="one">
                Additional Libraries
                <br />
                <v-checkbox
                  class="yalm"
                  v-model="ex4"
                  label="YAML"
                  color="success"
                  value="yaml"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  class="json"
                  v-model="ex4"
                  label="JSON"
                  color="success"
                  value="json"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  class="excel"
                  v-model="ex4"
                  label="EXCEL"
                  color="success"
                  value="excel"
                  hide-details
                ></v-checkbox>
              </v-window-item>

              <v-window-item value="two"> Two </v-window-item>
            </v-window>
          </v-card-text>
        </div>
      </v-col>

      <v-col cols="12" sm="6" class="col">
        <div class="s1">
          <v-tabs
            v-model="tab"
            background-color="transparent"
            color="#00ccff"
            grow
          >
            <v-tab value="one" class="gui">GUI</v-tab>
          </v-tabs>

          <v-row>
            <v-col cols="3" class="subher">
              <v-subheader>Project Name: </v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field
                class="textfield"
                v-model="first"
                variant="outlined"
                shaped
              ></v-text-field>
            </v-col>

            <v-col cols="3" class="username">
              <v-subheader>Username: </v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field
                class="textfielduser"
                v-model="first"
                variant="outlined"
                shaped
              ></v-text-field>
            </v-col>

            <v-col cols="3" class="password">
              <v-subheader>Password: </v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field
                class="textfieldpass"
                v-model="first"
                variant="outlined"
                shaped
              ></v-text-field>
            </v-col>

            <v-col cols="3" class="path">
              <v-subheader>Path: </v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field
                class="textfieldpath"
                v-model="first"
                variant="outlined"
                shaped
              ></v-text-field>
            </v-col>

            <v-col cols="3" class="exporter">
              <v-subheader>Exporter: </v-subheader>
            </v-col>
            <v-col cols="8">
              <div class="checkarea">
                <v-checkbox
                  class="visual"
                  v-model="ex4"
                  label="Visual Studio Code"
                  color="success"
                  value="visual"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  class="red"
                  v-model="ex4"
                  label="RED"
                  color="success"
                  value="red"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  class="pycharm"
                  v-model="ex4"
                  label="Pycharm"
                  color="success"
                  value="pycharm"
                  hide-details
                ></v-checkbox>
              </div>

              <v-btn
                flat
                color="#039BE5"
                class="cj"
                :href="a"
                @click="handleDownload"
              >
                Create Project
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      radioGroup: "blank",
      groupFramework: "katalon",
      a: "",
      Objected: {
        katalon: {
          gui: "https://gitlab.tma.com.vn/auto-web-master/katalon_tool/katalon-webui-template/-/archive/main/katalon-webui-template-main.zip",
          webapi:
            "https://gitlab.tma.com.vn/auto-web-master/katalon_tool/project-template/katalon-api-template/-/archive/main/katalon-api-template-main.zip",
        },
        robot: {
          gui: "https://gitlab.tma.com.vn/auto-web-master/katalon_tool/project-template/rf-webui-template/-/archive/main/rf-webui-template-main.zip",
        },
      },
    };
  },
  watch: {
    // whenever question changes, this function will run
    radioGroup(newQuestion) {
      this.a = this.Objected[`${this.groupFramework}`][`${newQuestion}`];
    },
    groupFramework(newQuestion) {
      this.a = console.log(
        this.Objected[`${newQuestion}`][`${this.radioGroup}`]
      );
    },
  },
  methods: {
    handleDownload() {
      fetch(this.a)
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    // getURL(type, app) {
    //   switch (app) {
    //     case "katalon":
    //       switch (type) {
    //         case "gui":
    //           return this.Objected.Katalon.GUI;
    //         default:
    //           return this.Objected.Katalon.webApi;
    //       }
    //     default:
    //       return this.Objected.Robot.GUI;
    //   }
    // },
  },
  // store: {
  //   debug: true,
  //   state: {
  //     href: "",
  //   },
  //     setMessageAction (newValue)
  //     {
  //       if (this.debug) console.log('setMessageAction triggered with', newValue)
  //       this.state.href = newValue
  //     },
  // },
};
</script>

<style>
.col {
  /* border: 1px solid;
  height: 800px;
  margin-top: 25px;
  max-width: 48%;
  display: flex;
  column-gap: 1px; */
  padding: 0.5rem !important;
}

.s1 {
  border: 1px solid;
  height: 800px;
  margin-top: 25px;
  /* display: flex;
  column-gap: 1px; */
}

/* .col2 {
  border: 1px solid;
  height: 800px;
  margin-top: 25px;
} */

.v-btn {
  border: 1px solid;
  border-top: none;
}

.v-slide-group__content .v-btn:last-child {
  border-right: none;
}

.v-slide-group__content .v-btn:first-child {
  border-left: none;
}

.v-btn.v-tab--selected {
  border: none !important;
}

.v-btn.v-tab--selected .v-tab__slider {
  display: none !important;
}

.v-window {
  text-indent: 22px;
}

.v-input__control {
  padding-left: 26px;
}

.radio .v-label {
  text-indent: 7px;
}

.framework .v-label {
  text-indent: 7px;
}

.yalm .v-label {
  text-indent: 11px;
}

.yalm .v-selection-control {
  height: 36px;
}

.json .v-label {
  text-indent: 11px;
}

.radio .v-selection-control--dirty .v-label {
  background-color: rgb(240, 165, 243);
  display: inline-block;
  font-weight: 700;
  width: 50%;
}

.json .v-selection-control {
  height: 46px;
}

.excel .v-label {
  text-indent: 11px;
}

.excel .v-selection-control {
  height: 36px;
}

.v-selection-control--dirty .v-label {
  color: #000000;
  font-weight: 700;
}

.framework .v-selection-control--dirty .v-label {
  background-color: rgb(165, 243, 243);
  display: inline-block;
  font-weight: 700;
  width: 50%;
}

.yalm .v-selection-control--dirty .v-label {
  color: rgb(23, 139, 49);
  font-weight: 700;
}

.json .v-selection-control--dirty .v-label {
  color: rgb(23, 139, 49);
  /* background-color: rgb(41, 207, 77); */
  font-weight: 700;
  /* -webkit-text-stroke: 0.5px rgb(0, 0, 0); */
}

.excel .v-selection-control--dirty .v-label {
  color: rgb(23, 139, 49);
  /* background-color: rgb(41, 207, 77); */
  font-weight: 700;
  /* -webkit-text-stroke: 0.5px rgb(0, 0, 0); */
}

.gui .v-btn__content {
  border-top-width: 10px;
  padding-right: 500px;
  padding-top: 10px;
  padding-left: 0px;
  border-bottom: 1px solid;
  color: black;
  border-color: aqua;
  padding-bottom: 5px;
}

.subheader {
  padding-left: 20px;
}

.subher {
  padding-left: 35px;
  padding-top: 18px;
}

.username {
  padding-left: 35px;
  padding-top: 18px;
}

.password {
  padding-left: 35px;
  padding-top: 18px;
}

.path {
  padding-left: 30px;
  padding-top: 18px;
}

.exporter {
  padding-left: 30px;
  padding-top: 18px;
}

.textfield .v-field__field {
  min-height: 35px !important;
  padding-top: 0;
}

.textfielduser .v-field__field {
  min-height: 35px !important;
  padding-top: 0;
}

.textfieldpass .v-field__field {
  min-height: 35px !important;
  padding-top: 0;
}

.textfieldpath .v-field__field {
  min-height: 35px !important;
  padding-top: 0;
}

.checkarea {
  border: 1px solid;
  margin-left: 25px;
}

.visual .v-selection-control {
  margin-left: -16px;
}

.red .v-selection-control {
  margin-left: -16px;
}

.pycharm .v-selection-control {
  margin-left: -16px;
}

/* .s1 {
  position: absolute;
} */

.cj {
  top: 120px;
  left: 200px;
  border: none;
}

.cj .v-btn__content {
  color: white;
}
</style>
 
