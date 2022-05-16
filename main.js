let resultText = ''

function getQuantity() {
  let value = document.getElementById('quantity').value
  if (value && value !== "0") {
    return value
  } else {
    return 1
  }
}

function getDieSize() {
  let value = document.getElementById('dieSize').value
  if (value && value !== "0") {
    return value
  } else {
    return 1
  }
}

function roll({
  quantity,
  dieSize,
}) {
  if (quantity < 1 || dieSize < 1) {
    return
  }
  const result = []
  let i =  quantity;
  for (i; i > 0; i--) {
    result.push(Math.floor(Math.random() * dieSize) + 1)
  }
  alert(`${quantity}d${dieSize}: ${result.join(", ")}`)
}