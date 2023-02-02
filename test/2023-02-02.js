/**
 *  给String 对象添加一个render方法，实现下面的功能
 * 
 * var greeting = 'My name is ${name},age ${age}, I am a ${job.jobName}';
 * var employee = {
 *     name: 'XiaoMing',
 *     age: 11,
 *     job: {
 *         jobName: 'designer',
 *         jobLevel: 'senior'
 *     }
 * 
 * }
 * var result = greeting.render(employee);
 * console.log(result);// My name is XiaoMing, age 11, I am a designer;
 * 
 */
 var greeting = 'My name is ${name},age ${age}, I am a ${job.jobName}';
 var employee = {
    name: 'XiaoMing',
    age: 11,
    job: {
        jobName: 'designer',
        jobLevel: 'senior'
    }
}

String.prototype.render1 = function(obj) {
    eval(`var {${Object.keys(obj).join()}} = obj`);
    return eval('`' + this + '`');
}
console.log('render1:' + greeting.render1(employee));

String.prototype.render2 = function(obj) {
    with(obj){
        return eval('`' + this + '`');
    }
}
console.log('render2:' + greeting.render2(employee));

String.prototype.render3 = function(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    return new Function(...keys, `return \`${this}\`;`)(...values);
}

console.log('render3:' + greeting.render3(employee));
