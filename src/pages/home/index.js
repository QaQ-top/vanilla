import '@/themes/style.css'
import './style.scss';

import { of, concat, fromEvent, debounceTime, map, concatMap, Observable, from, Subject} from 'rxjs';

const div = fromEvent(document.querySelector('#app'), 'click').pipe(
  debounceTime(500),
  map(e => e.target)
)


const series1$ = of("a", "b");
const series2$ = of("x", "y");
const result$ = concat(series1$, series2$);
result$.subscribe(console.log);


div.subscribe(function () {
  console.log("FFF")
})

div
  .pipe(concatMap((target) => Promise.resolve(target)))
  .subscribe((user) => {
    console.log("concatMap", user);
  });


const ob = new Observable((observer) => {

  observer.add()
  observer.remove()

  observer.next("45")
  observer.next("45")
  observer.next("45")

  // observer.error('错误')
  observer.complete()
  observer.unsubscribe()


})

ob.pipe((e) => {
  console.log(e)
  return 45
}, (e) => {
  console.log(e)
})

ob.forEach(e => {
  console.log(e)
})

// ob.subscribe((e) => {
//   console.log(e)
// })
// ob.subscribe((e) => {
//   console.log(e)
// })

let a = [1,2,3];
const obA = from(a)



const sub = new Subject();

sub.subscribe({
  next: (e) => console.log(e),
})

sub.next(99)

obA.subscribe(sub)
