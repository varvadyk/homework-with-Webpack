 export function* createIdGenerator() {
     let value = 1;
     while (value) {
         yield value++
     }
 }
 export const idGenerator = createIdGenerator();