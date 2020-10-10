function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function rubbishTalkGenerator (job) {
  const task = {
    developer: ['加個按鈕', '加新功能', '切個版', '改一點 code '],
    designer: ['畫一張圖', '改個 logo ', '順便幫忙設計一下', '隨便換個設計'],
    founder: ['週末加班', '要能賺錢', '想個 business model ', '找 VC 募錢']

  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  let options = {
    developer: '',
    designer: '',
    founder: '',
    expression: '',
  }

  // return notice if option is empty
  if (!job) {
    options.expression = '請選擇一個職業'
    return options
  }
  
  // choose a job
  switch (job) {
    case 'developer':
      options.expression = '工程師' + sample(task.developer)
      options.developer = 'on'
      break
    case 'designer':
      options.expression = '設計師' + sample(task.designer)
      options.designer = 'on'
      break
    case 'founder':
      options.expression = '創業家' + sample(task.founder)
      options.founder = 'on'
      break
  }

  // generate phrase
  options.expression += sample(phrase)

  return options
}

// export rubbishTalk function
module.exports = rubbishTalkGenerator