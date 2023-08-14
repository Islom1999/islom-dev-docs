# 📚 2-dars (Asosiy teglar)


<h2>Reference</h2>

[[toc]]

## Kirish

Assalomu aleykum men Islom Karimov, Bugungi darsimizda HTML strukturasi va HTML elementlarimi veb sahifamizga joylashni o'rganamiz.

## HTML strukturasi

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>2-dars</title>
</head>
<body>
    
</body>
</html>
```

1. `<!DOCTYPE html>` - kodelarimiz HTML5 versiyada yozilishini bildiradi
2. `<html></html>` - Veb-sahifamizning barcha qismini o'z ichiga oladi
3. `<head></head>` - Veb-sahifaning ust bilan bog'liq ma'lumotlarni o'z ichiga oladi, ekranga ko'rinmaydi. 
4. `<title></title>` - Veb-sahifaning yuqorida chiqadigan nomi yoziladigan qism.
5. `<body></body>` - Veb-sahifaning asosiy ma'lumotlarini o'z ichiga oladi va foydalanuvchiga ko'rinadigan qism.

## Sarlavha teglari

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>2-dars</title>
</head>
<body>
    <h1>Sarlavha 1</h1>
    <h2>Sarlavha 2</h2>
    <h3>Sarlavha 3</h3>
    <h4>Sarlavha 4</h4>
    <h5>Sarlavha 5</h5>
    <h6>Sarlavha 6</h6>
</body>
</html>
```

- `h1, h2, h3, h4, h5, h6` - ushbu teglar veb sahifamizdagi sarlavhalarni belgilaydi, h1 dan h6 gacha kichiklashib boradi.

## Paragraph tegi

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>2-dars</title>
</head>
<body>
    <h2>Sarlavha</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
</body>
</html>
```

- `p` - ushbu teg veb sahifamizdagi oddiy textlarni belgilaydi.

## `a` link tegi

```html
<a href="link" target="_blank">Sahifa nomi</a>
```

### vazifasi
- `a` - tegi boshqa sahifalarga o'tish uchun link vazifasini bajaradi
- `href="link"` - sahifa url manzilini belgilaydi
- `target="_blank"` - sahifalar yangi oyada ochilishini belgilaydi

### ishlatilishi
- Internetdagi boshqa sahifaga o'shni taminlaydi
- Loyihamizdagi boshqa html sahifaga o'tishni taminlaydi
- Sahifamizdagi boshqa bo'limga o'tishni taminlaydi

## `img` rasm joylash tegi
```html
<img src="image_url" alt="rasm chiqmay qolganda chiqadigan text">
```


### vazifasi
- `img` - tegi sahifamizga rasm joylash uchun ishlatiladi
- `src="image_url"` - rasm url manzilini belgilaydi
- `alt="text"` - xatolik tufayli rasm chiqmar qolganda chiqadigan textni belgilaydi

## Formatter (taxrirlash) teglari

```html
<!-- Og'ma shrift tegi -->
<i>Og'ma shrift</i>
<em>Og'ma shrift</em>

<!-- Qalin shrift tegi -->
<b>Og'ma shrift</b>
<strong>Og'ma shrift</strong>

<!-- Tagidan chizib yozish tegi -->
<ins>Og'ma shrift</ins>
<u>Og'ma shrift</u>

<!-- O'rtasidan chizib yozish tegi -->
<del>Og'ma shrift</del>

<!-- Text holatini saqlab qolish tegi -->
<pre>Og'ma shrift</pre>

<!-- Bo'sh satr(qator) tashlash tegi -->
<br>

<!-- satr bo'yicha chiziq chizish tegi -->
<hr>
```


