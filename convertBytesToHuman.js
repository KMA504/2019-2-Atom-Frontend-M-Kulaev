/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) { 
    if (bytes < 0 || typeof bytes !== "number") { 
        return false; 
    } 

      switch(true){
      	case(bytes < Math.pow(2, 10)): return +bytes + ' B';
      	case(bytes < Math.pow(2, 20)): return +(bytes/Math.pow(2, 10)).toFixed(2) + ' KB';
      	case(bytes < Math.pow(2, 30)): return +(bytes/Math.pow(2, 20)).toFixed(2) + ' MB';
      	case(bytes < Math.pow(2, 40)): return +(bytes/Math.pow(2, 30)).toFixed(2) + ' GB';
      	case(bytes < Math.pow(2, 50)): return +(bytes/Math.pow(2, 40)).toFixed(2) + ' TB';
      	case(bytes < Math.pow(2, 60)): return +(bytes/Math.pow(2, 50)).toFixed(2) + ' PB';
      	default: return false;
      }


} 

