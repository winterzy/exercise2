function add(a, b) {
    // 实现该函数
    var res = '';
    var temp = 0;
    a = a.split('');
    b = b.split('');
    while(a.length || b.length || temp) {
        temp += ~~a.pop() + ~~b.pop();
        res = (temp % 10) + res;
        temp = temp > 9;
    }
    return res.replace(/^0+/, '');
}
    // this.add();
    module.exports = add