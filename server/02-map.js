const meets = ['🐔','🐮','🐟','🐷'];

foot = []
meets.map(meet => {
 if (meet == '🐔') {
  foot.push('🍗')
 }

 if (meet == '🐮') {
  foot.push('🍖')
 }

 if (meet == '🐟') {
  foot.push('🍥')
 }
 
 if (meet == '🐷') {
  foot.push('🥪')
 }
})

return foot