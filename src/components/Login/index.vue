<template>
    <div class="login_body">
        <div>
            <input v-model="name" class="login_text" placeholder="账户名/手机号/email"/>

        </div>
        <div>
            <input v-model="psd" class="login_text" type="passwod" placeholder="请输入您的密码">
            <span>{{psd}}</span>
        </div>
        <div class="login_btn">
            <input type="submit" value="登录">
        </div>
        <div class="login_link">
            <a href="#">立即注册</a>
            <a href="#">找回密码?</a>
        </div>

    </div>
</template>

<script>
export default {
    name:'Login',
    data:{
        name:"",
        psd:"",
    }
}
</script>

<style scoped>
#content .login_body{
    flex:1;
    overflow: auto;
    width: 100%;
}
.login_body input.login_text{
    width: 100%;
    height: 40px;
    border:none;
    border-bottom: 1px solid #ccc;
    margin-bottom: 5px;
    outline: none;
    text-indent: 10px;

}
.login_body .login_btn{
    margin: 10px;
    height: 50px;
}
.login_body .login_btn input{
    font-size: 20px;
    width: 100%;
    height: 100%;
    background: #e54847;
    color: #fff;
    border: none;
    border-radius: 3px;
    display: block;
}
.login_body .login_link{
    
    display: flex;
    justify-content: space-around;

}
.login_body .login_link a{
    margin: 0 5px;
    text-decoration: none;
    font-size: 12px;
    color: #e54847;
}

</style>
