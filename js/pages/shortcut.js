const shortcut = {
    template: "\
    <div class='py-container'> \
        <div class='shortcut'> \
            <ul class='fl'> \
               <li class='f-item'>玲梦欢迎您！</li> \
               <li class='f-item' v-if=' user.userName'>\
               尊敬的会员，<span style='color: red;'>{{user.userName}}</span>\
               </li>\
               <li v-else class='f-item'> \
                   请<a href='javascript:void(0)' @click='gotoLogin'>登录</a>　 \
                   <span><a href='register.html' target='_blank'>免费注册</a></span> \
               </li> \
           </ul> \
           <ul class='fr'> \
               <li class='f-item'>我的订单</li> \
               <li class='f-item space'></li> \
               <li class='f-item'><a href='home.html' target='_blank'>我的玲梦</a></li> \
               <li class='f-item space'></li> \
               <li class='f-item'>玲梦会员</li> \
               <li class='f-item space'></li> \
               <li class='f-item'>企业采购</li> \
               <li class='f-item space'></li> \
               <li class='f-item'>关注玲梦</li> \
               <li class='f-item space'></li> \
               <li class='f-item' id='service'> \
                   <span>客户服务</span> \
                   <ul class='service'> \
                       <li><a href='cooperation.html' target='_blank'>合作招商</a></li> \
                       <li><a href='shoplogin.html' target='_blank'>商家后台</a></li> \
                       <li><a href='cooperation.html' target='_blank'>合作招商</a></li> \
                       <li><a href='#'>商家后台</a></li> \
                   </ul> \
               </li> \
               <li class='f-item space'></li> \
               <li class='f-item'>网站导航</li> \
           </ul> \
       </div> \
    </div>\
    ",
    name: "shortcut",
    data() {
        return {
            user: {
                id:'',
                userName:''
            }
        }
    },
    created() {
        ly.http("/manager/auth/verify")
            .then(resp => {
                //这里遇到的问题是,我对返回结果进行了再次的包装 所以 原来的resp.data返回值有问题
                this.user = resp.data.data;
            })
    },
    methods: {
        gotoLogin() {
            window.location.href = "http://www.lingmeng.com/login.html?returnUrl=" + window.location;
        }
    }
}
export default shortcut;