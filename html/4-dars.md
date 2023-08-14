# 📚 5-dars (Tables)


<h2>Reference</h2>

[[toc]]

## Kirish
Assalomu aleykum men Islom Karimov, Bugungi darsimizda veb-sahiifamizda jadvallar yaratishni o'rganamiz.

## Table

```html
<table border="1" width="600" height="400">
  <tr>
    <td>Company</td>
    <td>Contact</td>
    <td>Contact</td>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Francisco Chang</td>
  </tr>
</table>
```
- `table` - umumiy jadval chegarasi
- `tr` - jadval satrlari
- `td` - jadval ustunlari
- `width` - jadval enining uzunligini
- `height` - jadval bo'yining uzunligini 
- `border` - jadval chegaralari chizigini

### Table - head and body

```html
<table border="1" width="600" height="400">
  <thead>
    <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Contact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
    </tr>
    <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Francisco Chang</td>
    </tr>
  </tbody>
</table>
```

- `thead` - jadval sarlavhalar qismi
- `th` - jadval sarlavha elementlari
- `tbody` - jadval tana qismi

### Table - colspan and rowspan

```html
<table border="1" width="600" height="400">
  <thead>
    <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Contact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
    </tr>
    <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Francisco Chang</td>
    </tr>
  </tbody>
</table>
```
- `colspan` - jadval satrlarini birlashtiradi
- `rowspan` - jadval ustunlarini birlashtiradi
