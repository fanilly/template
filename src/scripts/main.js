/**
 * @Author:      allenAugustine
 * @DateTime:    2017-08-11 08:43:13
 * @Description: Description
 */
//es6 新增了块级作用域
{
  const INFO = {
    name:'allenAugustine',
    address:'china'
  };

  /**
   *
   * es6的模板字符串
   *
   */
  let str = `Hi ! My name is ${INFO.name}, I'm from ${INFO.address}`;
  console.log(str);
}

{
  let str = 'string';
  console.log(str.includes('t'));
}
