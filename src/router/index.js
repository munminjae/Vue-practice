//개발할 화면에 해당하는 vue 파일을 import하고 route 안에 특정 path와 매핑해주면 된다.
import { 
  createRouter, 
  createWebHistory
} from 'vue-router'
import Home from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingHtml from '../views/DataBindingHtml.vue'
import DataBindingInputText from '../views/DataBindingInputText.vue'
import DataBindingInputNumber from '../views/DataBindingInputNumber.vue'
import DataBindingTextarea from '../views/DataBindingTextarea.vue'
import DataBindingSelect from '../views/DataBindingSelect.vue'
import DataBindingCheckbox from '../views/DataBindingCheckbox.vue'
import DataBindingCheckbox2 from '../views/DataBindingCheckbox2.vue'
import DataBindingRadio from '../views/DataBindingRadio.vue'
import DataBindingAttribue from '../views/DataBindingAttribue.vue'
import DataBindingButton from '../views/DataBindingButton.vue'
import DataBindingClass from '../views/DataBindingClass.vue'
import DataBindingClass2 from '../views/DataBindingClass2.vue'
import DataBindingStyle from '../views/DataBindingStyle.vue'
import DataBindingStyle2 from '../views/DataBindingStyle2.vue'
import DataBindingList from '../views/DataBindingList.vue'
import RenderingVIf from '../views/RenderingVIf.vue'
import EventClick from '../views/EventClick.vue'
import EventChange from '../views/EventChange.vue'
import WatchPractice from '../views/WatchPractice.vue'
import DataBindingList2 from '../views/DataBindingList2.vue'
import NestedComponent from '../views/NestedComponent.vue'

/*
  path : url 주소 정의
  name : route로 연결할 때 지정한 이름(선택사항)
  component : 파일 연결(route에서 불러와질 컴포넌트를 의미)
*/
/*
첫 번째 등록된 route와 두 번째 등록된 route의 차이 : 첫 번째는 이미 import하고 두 번째는 path에 접근하기 전에는 vue 파일에 대한 import가 일어나지 않는다.
*/
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindingHtml',
    name: 'DataBindingHtml',
    component: DataBindingHtml
  },
  {
    path: '/databindingInputText',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/databindingInputNumber',
    name: 'DataBindingInputNumber',
    component: DataBindingInputNumber
  },
  {
    path: '/dataBindingTextarea',
    name: 'DataBindingTextarea',
    component: DataBindingTextarea
  },
  {
    path: '/dataBindingSelect',
    name: 'DataBindingSelect',
    component: DataBindingSelect
  },
  {
    path: '/dataBindingCheckbox',
    name: 'DataBindingCheckbox',
    component: DataBindingCheckbox
  },
  {
    path: '/dataBindingCheckbox2',
    name: 'DataBindingCheckbox2',
    component: DataBindingCheckbox2
  },
  {
    path: '/dataBindingRadio',
    name: 'DataBindingRadio',
    component: DataBindingRadio
  },
  {
    path: '/dataBindingAttribue',
    name: 'DataBindingAttribue',
    component: DataBindingAttribue
  },
  {
    path: '/dataBindingButton',
    name: 'DataBindingButton',
    component: DataBindingButton
  },
  {
    path: '/dataBindingClass',
    name: 'DataBindingClas',
    component: DataBindingClass
  },
  {
    path: '/dataBindingClass2',
    name: 'DataBindingClas2',
    component: DataBindingClass2
  },
  {
    path: '/dataBindingStyle',
    name: 'DataBindingStyle',
    component: DataBindingStyle
  },
  {
    path: '/dataBindingStyle2',
    name: 'DataBindingStyle2',
    component: DataBindingStyle2
  },
  {
    path: '/dataBindingList',
    name: 'DataBindingList',
    component: DataBindingList
  },
  {
    path: '/renderingVIf',
    name: 'RenderingVIf',
    component: RenderingVIf
  },
  {
    path: '/eventClick',
    name: 'EventClick',
    component: EventClick
  },
  {
    path: '/eventChange',
    name: 'EventChange',
    component: EventChange
  },
  {
    path: '/watchPractice',
    name: 'WatchPractice',
    component: WatchPractice
  },
  {
    path: '/dataBindingList2',
    name: 'DataBindingList2',
    component: DataBindingList2
  },
  {
    path: '/NestedComponent',
    name: 'NestedComponent',
    component: NestedComponent
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
