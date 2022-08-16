var date = new Date();
date = ('00' + date.getHours()).slice(-2) + ':' + 
('00' + date.getMinutes()).slice(-2) + ':' + 
('00' + date.getSeconds()).slice(-2);
console.log(date);

date = new Date();
hours = ('00' + (date.getHours()+2)).slice(-2);
minutes =('00' + date.getMinutes()).slice(-2);
seconds = ('00' + date.getSeconds()).slice(-2);
console.log(hours + ':' + minutes + ':' + seconds)

