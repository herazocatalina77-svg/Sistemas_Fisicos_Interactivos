# Diario de la unidad 1
``` js
sound ("bd^ hh sd oh")
setcpm(45);
sound ("<[bd bd] sd hh sd, oh rim>*4, - - perc:1*2")
note("48 52 55 59").sound("gm_acoustic_bass")
n("0 2 4 <[6,8] [7,9]>")
.scale("C:minor").sound("piano")
note("c!2 [eb,<g a bb a>]").sound("piano")
n(`<
[~ 0] 2 [0 2] [~ 2]
[~ 0] 1 [0 1] [~ 1]
[~ 0] 3 [0 3] [~ 3]
[~ 0] 2 [0 2] [~ 2]
>*4`).scale("C4:minor")
.sound("piano")
sound("bd*4,~ rim ~ cp").slow(2)
note("c3 eb3 g3").s("sawtooth").vowel("<a e i o>")
```

