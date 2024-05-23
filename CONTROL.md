# Instrucciones para trabajar con GitLab #
Para trabajar con GitLab es necesario ya tener las credenciales SSH en el equipo de trabajo para acceder al repositorio.
Una vez segurado ese requisito, se puede proceder desde la terminar Git Bash en el sitio de trabajo.

## Creando el git ##
1. Se inicia el git
    git init
2. Se clona el repositorio
    git clone https://gitlab.com/ipn-escom/2024-2/2024-2-ia-ads/hotel-de-mascotas.git
3. Se cambia a la dirección del proyecto
    cd hotel-de-mascotas

## Agregando cambios desde otras ramas ##
1. Se cambia a la rama de interés (No se deben de hacer directamente en la rama main y la etiqueta -b es opcional en caso de que se desee crear una nueva rama)
    git checkout -b dev
2. Para asegurar que la rama se haya creado, agregué un "push" al repositorio
    git push origin dev
3. Es probable que le aparezcan errores que amenacen con cambiar ciertos archivos por otros de tipo CRL o con términos similares, ejecute el siguiente comando para evitarlos
    git config core.autocrlf false
7. Una vez que se han agregado los cambios, se colocan en la primera etapa "stage"
    git add .
8. Ya verificados los cambios, se agrega el commit
    git commit -m "Ingresa un mensaje descriptivo aquí"
9. Si se ha procedido correctamente, deberá relacionar la nueva rama con su repositorio local (solo la primera vez) y ejecutar el push con la bandera --set-upstream origin dev, de lo contrario, será suficiente sin la bandera
    git push --set-upstream origin dev

## Mezclando ramas ##
1. Dirijase a la rama de destino
    git checkout main
2. Mezcle las ramas, incluyendolas en el siguiente orden: _Rama actualizada_ _Rama por actualizar_
    git merge dev main
3. Puede consultar las diferencias con el siguiente comando y salir del menú con "Q"
    git diff dev main
