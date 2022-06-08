t = True
bludo = ["Маклюбе(для 8 персон) - 5000 kzt.", "Тосты(5 шт.) - 1000 kzt.", "Кофте(5 шт.) - 1000 kzt.",]
napit = ["Maxi Tea 1l - 350 kzt.", "Holiday 2.5l - 400 kzt.", "Coca Cola 2l - 550 kzt.", "Fanta 2l - 550 kzt.", "Sprite 2l - 550 kzt."]
zakus = ["BigBob Salt Little - 210 kzt.", "BigBob со вкусом вяленой конины Little - 220 kzt.", "BigBob Salt Large - 430 kzt.", "BigBob со вкусом соуса сальса Little - 220 kzt."]
sweets = ["Albeni Little - 180 kzt.", "Albeni Big - 200 kzt.", "Albeni XXL - 300 kzt."]
tea = ["Ташкентский 1l - 1000 kzt.", "Обычный с молоком 1l - 1000 kzt.", "Черный с лимоном 1l - 1000 kzt.", "Зеленый 1l - 1000 kzt."]
zakaz = []
print("Здраствуйте, это KTL Food&Drinks.Это наш каталог, если хотите что-то заказать напишите цифру стоящую рядом с заказом.")
while t:
    print("0. Выйти.\n1. Горячие блюда.\n2. Напитки.\n3. Закуски.\n4. Сладости.\n5. Чай.\n6. Посмотреть корзину.\n7. Очистить корзину.")
    order = input("Выберите что-то одно: ")
    if order == '1':
        print()
        for i in range(len(bludo)):
            print(str(i) + ". "+ bludo[i])
        print(str(len(bludo)) + ". Отменить")
        order = int(input("Выберите что-то одно: "))
        if order == len(bludo):
            print()
        else:
            try:
                zakaz.append(bludo[order])
                print()
                print("Заказ добавлен в корзину.")
                print()
            except IndexError:
                print()
                print("Такого номера нет. Выберите еще раз.")
                print()
    elif order == '2':
        print()
        for i in range(len(napit)):
            print(str(i) + ". "+ napit[i])
        print(str(len(napit)) + ". Отменить")
        order = int(input("Выберите что-то одно: "))
        if order == len(napit):
            print()
        else:
            try:
                zakaz.append(napit[order])
                print()
                print("Заказ добавлен в корзину.")
                print()
            except IndexError:
                print()
                print("Такого номера нет. Выберите еще раз.")
                print()
    elif order == '3':
        print()
        for i in range(len(zakus)):
            print(str(i) + ". "+ zakus[i])
        print(str(len(zakus)) + ". Отменить")
        order = int(input("Выберите что-то одно: "))
        if order == len(zakus):
            print()
        else:
            try:
                zakaz.append(zakus[order])
                print()
                print("Заказ добавлен в корзину.")
                print()
            except IndexError:
                print()
                print("Такого номера нет. Выберите еще раз.")
                print()
    elif order == '4':
        print()
        for i in range(len(sweets)):
            print(str(i) + ". "+ sweets[i])
        print(str(len(sweets)) + ". Отменить")
        order = int(input("Выберите что-то одно: "))
        if order == len(sweets):
            print()
        else:
            try:
                zakaz.append(sweets[order])
                print()
                print("Заказ добавлен в корзину.")
                print()
            except IndexError:
                print()
                print("Такого номера нет. Выберите еще раз.")
                print()
    elif order == '5':
        print()
        for i in range(len(tea)):
            print(str(i) + ". "+ tea[i])
        print(str(len(tea)) + ". Отменить")
        order = int(input("Выберите что-то одно: "))
        if order == len(tea):
            print()
        else:
            try:
                zakaz.append(tea[order])
                print()
                print("Заказ добавлен в корзину.")
                print()
            except IndexError:
                print()
                print("Такого номера нет. Выберите еще раз.")
                print()
    elif order == "6":
        print()
        names = []
        money = 0
        for elem in zakaz:
            names.append(elem.split(' -')[0])
            money += int(elem.split(' ')[-2])
        if names == []:
            print("Вы еще ничего не заказали")
            print("К оплате: " + str(money) + " kzt.")
            print()
        else:
            print("Ваш заказ: ", ', '.join(names) + ".")
            print("К оплате: " + str(money) + " kzt.")
            print()
    elif order == '7':
        zakaz.clear()
        print()
        print("Ваша корзина очищена")
        print()
    elif order == '0':
        print()
        print("Спасибо, с вами была команда KTL Food&Drinks. Всего доброго!")
        t = False
    else:
        print()
        print("Выберите существующий заказ.")
        print()