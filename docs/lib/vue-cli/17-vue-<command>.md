# vue <command>

>  output help information on unknown commands

主要是针对没有设置的命令，输出帮助信息

```js
program
  .arguments('<command>')
  .action((cmd) => {
    program.outputHelp()
    console.log(`  ` + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`))
    console.log()
    // 这个建议命令是个人性化的功能，如果你不小心输错一个字符，他会提示你正确的
    suggestCommands(cmd)
  })
```

我们看下 `suggestCommands` 的代码

```js

function suggestCommands (unknownCommand) {
  // 取得所有注册命令
  const availableCommands = program.commands.map(cmd => cmd._name)

  let suggestion

  availableCommands.forEach(cmd => {
    /*
    举个拼配的例子
    实际输入值 bast
    ''   leven 4
    计划输入值 best leven 1
    这样的情况下，isBestMatch = true
    */
    const isBestMatch = leven(cmd, unknownCommand) < leven(suggestion || '', unknownCommand)
    // 如果拼配不上的字符数 < 3 并且 isBestMatch=true 则说明找到了 “建议命令”
    if (leven(cmd, unknownCommand) < 3 && isBestMatch) {
      suggestion = cmd
    }
  })

  if (suggestion) {
    console.log(`  ` + chalk.red(`Did you mean ${chalk.yellow(suggestion)}?`))
  }
}
```

[leven](https://github.com/sindresorhus/leven) README中作者这样描述：测量两个不同的字符串的差别，实现莱温斯坦距离算法最快的js实现，没有之一...，说明很有信心的！