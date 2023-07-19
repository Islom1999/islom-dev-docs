# 📚 3-dars (list,audio,video,iframe)

<iframe width="100%" height="500px" src="https://www.youtube.com/embed/xcGtfYUfDLo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<h2>Reference</h2>

[[toc]]

## Kirish
Assalomu aleykum men Islom Karimov, Bugungi darsimizda favicon(sahifa logo rasmi), ro'yhatlar, audio, video, iframe(sahifa ichida sahifa joylash) ni o'rganamiz. 

## favicon (sahifa logo rasmi)
```html
<link rel="icon" href="image_url">
``` 
- veb sahifamizga logo rasm yuklash uchun ishlatiladi

## Ro'ylatlar

### Tartiblangan ro'yhatlar
```html
<ol type="1">
    <li>Html</li>
    <li>Css</li>
    <li>JavaScript</li>
    <li>NodeJs</li>
</ol>
``` 
- `ol, li` teglari - veb-sahifada tartiblangan ro'yhatlar yaratish uchun foydalaniladi
- `type` atributi - ro'yhat tartib turini belgilaydi
    - `1` - sonlar 
    - `a` - kichik harf alifbo tartibida
    - `A` - katta harf alifbo tartibida
    - `I` - rim raqamlari tartibida

### Tartiblanmagan ro'yhatlar
```html
<ul type="disc">
    <li>Html</li>
    <li>Css</li>
    <li>JavaScript</li>
    <li>NodeJs</li>
</ul>
``` 
- `ul, li` teglari - veb-sahifada tartiblanmagan ro'yhatlar yaratish uchun foydalaniladi
- `type` atributi - ro'yhat tartibidagi belgi shaklini belgilaydi
    - `disc` - dumaloq 
    - `circle` - aylana
    - `square` - to'rtburchak
    - `none` - belgisiz

## Audio

```html
<!-- ikki hil usulda qilsa bo'ladi -->
<audio src="audio_url" controls></audio>

<audio controls>
    <source src="audio_url">
</audio>
```
- `audio` tegi - sahifaga audio joylash uchun ishlatiladi
-  `src="audio_url"` - audio url manzili qo'yiladi

## Video 

```html
<!-- ikki hil usulda qilsa bo'ladi -->
<video src="video_url" controls></video>

<video controls>
    <source src="video_url">
</video>
```
- `video` tegi - sahifaga video joylash uchun ishlatiladi
-  `src="video_url"` - video url manzili qo'yiladi

## iframe (sahifa ichida sahifa)

```html
<iframe src="sahifa_url" frameborder="0"></iframe>
```
- `iframe` tegi - sahifa ichida sahifa joylash uchun ishlatiladi
-  `src="sahifa_url"` - sahifa url manzili qo'yiladi