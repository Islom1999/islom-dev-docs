# 📚 6-dars (Forms)


<h2>Reference</h2>

[[toc]]

## Kirish
Assalomu aleykum men Islom Karimov, Bugungi darsimizda form teglari bilan ishlashni o'rganamiz.

## Forms

```html
<form>
	<fieldset>
		<legend>forms</legend>
		<input type="text" maxlength="6" size="6" name="" required="">
		<input type="password" name="" minlength="6" placeholder="parolni kiriting" disabled="">
		<input type="email" name="" readonly="">
		<input type="search" name="">
		<input type="submit" value="jo'natish" name="">
		<input type="checkbox" checked="checked">
		<input type="button" value="nom" name="">
		<input type="reset" name="">

		<input type="radio" id="id" name="radio">
		<label for="id"></label>

		<input type="color" name="">
		<input type="date" name="">
		<input type="month" name="">
		<input type="datetime-local" name="">
		<input type="time" name="">

		<input type="range" name=""> <!-- ovoz kontrol -->
		<input type="number" min="10" max="100" step="10" name="">

		<input type="image" src="" name="">
		
		<textarea cols="20" rows="10" ></textarea>

		<select>
			<option>birinchi</option>
			<option>ikkinchi</option>
			<option>uchinchi</option>
		</select>

		<input type="text" list="name" name="">
		<datalist id="name">
			<option value='birinchi'>
			<option value='ikkinchi'>
			<option value='uchinchi'>
		</datalist>
	</fieldset>
</form>
```
