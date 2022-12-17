<script type="text/javascript">
    function calc() {
        var oper1=document.getElementById("num1");//获取输入数据1
        var oper2=document.getElementById("num2");//获取输入数据2
        var res;
        switch (op) {
            case "+":
                res=change(oper1.value)+change(oper2.value);
                break;}
        document.getElementById("anw").value=res;
        function change(x) {
            return parseFloat(x)