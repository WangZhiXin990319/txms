let obj1 = {
    fun:function(){
       alert(123);
    }
}
let obj2 = JSON.parse(JSON.stringify(obj1))