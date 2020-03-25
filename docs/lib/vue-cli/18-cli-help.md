# vue --help

help 主要是为了输出帮助信息

```js
// add some useful info on help
program.on('--help', () => {
  console.log()
  console.log(`  Run ${chalk.cyan(`vue <command> --help`)} for detailed usage of given command.`)
  console.log()
})

// 这个循环是给每一个命令都自定义了帮助信息
program.commands.forEach(c => c.on('--help', () => console.log()))

```

至此，@vue/cli/bin 中涉及的15个命令就都过了一遍，相信你和我一样都有收获。