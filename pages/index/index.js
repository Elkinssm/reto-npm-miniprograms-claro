import { upperCase, localeUpperCase } from "upper-case";
Page({
  data: { input: "", mayus: "" },
  onChange: function(e) {
    this.setData({ input: e.detail.value });
  },
  upper: function(e) {
    this.setData({ mayus: upperCase(this.data.input) });
    output.style.border = "1px solid black";
  }
});
