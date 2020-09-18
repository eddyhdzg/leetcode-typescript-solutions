1. Array from 1 to n

### .keys

```
Array.from(Array(10).keys())
[...Array(10).keys()]
[ ...Array(N).keys() ].map( i => i+1);
Array.from(Array(N), (_, i) => i+1)
Array.from({ length: N }, (_, i) => i+1)
[ ...Array(N).keys() ].map((i) => f(i))
```

### Slice vs Splice

splice() changes the original array whereas slice() doesn't but both of them returns array object.

slice is end is not inclusive
