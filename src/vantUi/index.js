//1.专门用来引入注册Vant ui组件的
import Vue from "vue";
import {
    Button, Search, Swipe, SwipeItem, Icon, Tag, DropdownMenu, DropdownItem,
    Empty, List, Cell, Toast, Tabbar, TabbarItem, Col, Row,Form,Field
} from "vant";

Vue.use(Button)
Vue.use(Search)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Icon)
Vue.use(Tag)
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Empty)
Vue.use(List)
Vue.use(Cell)
Vue.use(Toast) //全局使用 this.$toast("删除成功")
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Col)
Vue.use(Row)
Vue.use(Form);
Vue.use(Field);