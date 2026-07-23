# Unidad 1 código strudel
```
stack(
  setcpm(65),
  //parte estrofa
  
  note("<c2@8 eb2@8 g2@8 bb1@8>")
    .sound("piano")
    .room(0.95)
    .size(1)
    .mask("<1!16 0!32>")
    .gain(0.5),
  
  note("c3 eb3 g3 bb3")
    .sound("gm_bassoon")
    .slow(8)
    .room(0.9)
    .delay(0.4)
    .gain(0.25)
    .mask("<1!16 0!32>"),

  note("c6 g5 eb5")
    .sound("gm_xylophone")
    .gain(0.08)
    .room(1)
    .mask("<1!16 0!32>"),
  
  //transición primera parte a coro
  
  note("-@8 c3@16")
    .sound("gm_trombone")
    .slow(25)
    .gain(0.7)
    .attack(1)
    //.pan("0 1")
    .release(4),
  
  //coros
  
  note("c3, eb3, g3")
    .sound("gm_cello")
    .mask("<0!2 1!4 0!4>")
    .attack(1)
    .slow(8)
    .gain(0.7)
    .lpf(650)
    .release(4),
  
  note("[C3, Eb3, G3]")
    .sound("gm_pad_4_choir")
    .slow(11.5)
    .degradeBy(0.4)
    .attack(1)
    .gain(0.15),
  
  note("<[c2@8 eb2@8 g2@8 bb1@8]>")
    .sound("piano")
    .room(0.95)
    .size(1)
    .mask("<0!16 1!16>")
    .gain(0.3),
)
```
