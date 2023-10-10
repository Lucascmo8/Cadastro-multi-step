import { ref } from 'vue'
import { defineStore } from 'pinia'
import Swal from 'sweetalert2';

interface student {
  name:string;
  email:string;
  phone:string;
  portfolio:string;
  skillLevel:string;
  challenge:string[];
}

export const useRegisterStore = defineStore('register', () => {
  const currentStep = ref<number>(4)

  const currentNameFunctionForm = ref<string>("personalInformation")

  const animateName = ref<string>("slide")

  const verifyForm = () =>{
    if((currentNameFunctionForm.value == "review" || currentNameFunctionForm.value == "personalInformation") && studentInformations.value.name.trim() == ''){
      backToError(1)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your full name.',
        confirmButtonColor: "#f97316"
      })
    }else if((currentNameFunctionForm.value == "review" || currentNameFunctionForm.value == "personalInformation") && studentInformations.value.email == ''){
      backToError(1)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your email address.',
        confirmButtonColor: "#f97316"
      })
    }else if((currentNameFunctionForm.value == "review" || currentNameFunctionForm.value == "personalInformation") && studentInformations.value.phone == ''){
      backToError(1)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your Phone Number.',
        confirmButtonColor: "#f97316"
      })
    }else if((currentNameFunctionForm.value == "personalInformation" || currentNameFunctionForm.value == "review") && studentInformations.value.portfolio == ''){
      backToError(1)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your Portfolio/GitHub Link.',
        confirmButtonColor: "#f97316"
      })
    }else if((currentNameFunctionForm.value == "review" || currentNameFunctionForm.value == "skillLevel") && studentInformations.value.skillLevel == ''){
      backToError(2)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please select a skill level.',
        confirmButtonColor: "#f97316"
      })
    }else if((currentNameFunctionForm.value == "challenge" || currentNameFunctionForm.value == "review") && studentInformations.value.challenge.length === 0){
      backToError(3)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please mark minimum 1 challenge.',
        confirmButtonColor: "#f97316"
      })
    }else{
      nextStep()
    }
  }

  const nextStep = () =>{
    currentStep.value ++
    animateName.value = "slide"
    blockButtons()
    changeNameFunctionForm()
  }

  const prevStep = () =>{
    currentStep.value --
    animateName.value = "slideBack"
    blockButtons()
    changeNameFunctionForm()
  }

  const backToError = (index:number) =>{
    currentStep.value = index
    animateName.value = "slideBack"
    blockButtons()
    changeNameFunctionForm()
  }

  const changeNameFunctionForm = () =>{
    if(currentStep.value == 1){
      currentNameFunctionForm.value = "personalInformation"
    }else if(currentStep.value == 2){
      currentNameFunctionForm.value = "skillLevel"
    }else if(currentStep.value == 3){
      currentNameFunctionForm.value = "challenge"
    }else if(currentStep.value == 4){
      currentNameFunctionForm.value = "review"
    }
  }

  const isAnimating = ref<boolean>(false)

  const blockButtons = ()=>{
    isAnimating.value = true

    setTimeout(() => {
        isAnimating.value = false
    }, 2000)
  }

  const studentInformations = ref<student>({
    name:'',
    email:'',
    phone:'',
    portfolio:'',
    skillLevel:'',
    challenge:[],
  })


  return { 
    currentStep,
    verifyForm,
    nextStep,
    prevStep,
    studentInformations,
    animateName,
    isAnimating,
    currentNameFunctionForm,
  }
})
