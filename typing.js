new Vue({
    el:"#app",
    data:{
        startFlg:"",
        current_question:"",
        questions:[
            "Vue.js",
            "Nuxt.js",
            "React.js",
            "Next.js",
            "javascript"
        ],
        typeBox:"",
        current_question_counts:0,
        question_counts:0
    },
    computed:{
        styleObject:function(){
            width = 20 * this.current_question_counts + "%"
            if(this.current_question_counts === 5 ){
                color = "#03a9f4"
            } else {
                color = "orange"
            }
            return {
                "width":width,
                "background-color":color
            }
        }
    },
    methods:{
        gameStart:function(){
            this.startFlg = true;
            this.$nextTick(function(){
                document.getElementById("typeStart").focus()
            })
        }
    },
    mounted:function(){
        this.current_question = this.questions[0]
        this.question_counts = this.questions.length
    },
    watch:{
        typeBox:function(e){
            if(e === this.current_question){
                this.questions.splice(0,1)
                this.current_question = this.questions[0]
                this.typeBox = "";
                this.current_question_counts = this.current_question_counts + 1;
            }
        }
    }
  })