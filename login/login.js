var go_login = document.getElementById("link_login");
var get_login = document.querySelector(".logins");
var go_register = document.getElementById("link_register");
var get_register = document.querySelector(".registers");
var goto_index = document.querySelector(".login_button");
var login_name = document.getElementById("name");
var login_password = document.getElementById("pwd");

go_login.onclick = function () {
  get_login.style.display = "block";
  get_register.style.display = "none";
};

go_register.onclick = function () {
  get_login.style.display = "none";
  get_register.style.display = "block";
};

function check_login() {
  var flag = true;
  if (login_name.value == "") {
    login_name.placeholder = "    姓名不能为空";
    flag = false;
  }
  if (login_password.value.length == 0) {
    login_password.placeholder = "    密码不能为空";
    flag = false;
  }
  if (login_password.value.length != 0) {
    if (login_password.value != "123") {
      login_password.value = "    密码错误";
      flag = false;
    }
  }
  return flag;
}
function go_index() {
  if (check_login() != false) {
    return true;
  }
  return false;
}

function check_register() {
  var ret = /^\d{6}$/;
  var flags = true;
  var register_name = document.getElementById("r_name");
  var register_password = document.getElementById("r_pwd");
  var register_checkpassword = document.getElementById("checkpassword");
  if (register_name.value == "") {
    register_name.placeholder = "    不能为空";
    flags = false;
  }
  if (register_password.value.length == 0) {
    register_password.placeholder = "    不能为空";
  }
  if (register_name.value != "") {
    if (!ret.test(register_name.value)) {
      register_name.value = "    用户名只允许由6位数字组成";
      flags = false;
    }
    if (register_checkpassword.value != register_password.value) {
      register_checkpassword.value = "    两次密码不相同";
      flags = false;
    }
    return flags;
  }
}
function gotologin() {
  if (check_register()==true) {
    alert("注册成功");
    get_login.style.display = "block";
    get_register.style.display = "none";
  }
  return false;
}
