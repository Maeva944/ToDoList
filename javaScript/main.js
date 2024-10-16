//Pour faire disparaître le formulaire tant qu'on a pas cliqué sur le bouton

const button = document.getElementById('bouton1');

const formulaire = document.getElementById('form');

formulaire.style.display = "none";

button.addEventListener('click', function() {

    formulaire.style.display = "block";

});

 

//Fonction qui permet de créer des boutons

function create_Button(NameButton) {

    const btn = document.createElement('button');

    btn.innerHTML = NameButton;

    return btn;

};

 

//Fonction qui permet d'ajouter une tâche à une liste

function add_task_to_list(list, li) {

    list.appendChild(li);

};

 

//Fonction qui permet de supprimer une liste

function remove_task(list) {

    document.body.removeChild(list);

};

 

//Fonction qui permet de supprimer une tâche d'une liste

function remove_task_from_list(li) {

    li.parentNode.removeChild(li);

};

 

//Fonction qui permet de modifier le nom et la date d'une tâche

function update_task(list, li){

    remove_task_from_list(li);

    creat_task(list);

};

function filterTask(filter, nonfilter, other, isChecked) {
    const taches = document.querySelectorAll('ul li');
    taches.forEach(function (tache) {
        const checkbox = tache.querySelector('input[type="checkbox"]');
        if (isChecked) {
            if (checkbox.checked) {
                tache.style.display = filter;
            } else {
                tache.style.display = nonfilter;
            }
        } else {
            tache.style.display = other;
        }
    });
    
};

function btnfilter () {
    const taskfinish = document.getElementById('option1');
    const taskunfinish = document.getElementById('option2');
    const alltask = document.getElementById('option3');

    taskfinish.addEventListener('change', function () {
        filterTask('block', 'none', 'block', this.checked)
    });

    taskunfinish.addEventListener('change', function () {
        filterTask('none', 'block', 'none', this.checked);
    });

    alltask.addEventListener('change', function () {
        filterTask('block', 'block', 'block', this.checked);
    });
};

btnfilter ();


//Fonction qui permet de créer une tâche

function creat_task(list) {

    const checkbox = document.createElement('input');

    checkbox.type = 'checkbox';

    checkbox.id = 'checkbox';

    let taskName = prompt('Nom de la tâche');

    if (taskName !== null) {

        const li = document.createElement('li');

        li.classList.add('puce');

        li.appendChild(checkbox);

        li.appendChild(document.createTextNode(taskName));

        const dateInput = document.createElement('input');

        dateInput.type = 'date';

        li.appendChild(dateInput);

        dateInput.id = 'date';

        const deleted_button = create_Button('x');

        li.appendChild(deleted_button);

        deleted_button.id = 'deleted';

        add_task_to_list(list, li);

        deleted_button.addEventListener('click', () => {

            remove_task_from_list(li);

        });

        const update_button = create_Button('');

        update_button.id = 'update';

        li.appendChild(update_button);

        update_button.addEventListener('click', () => {

            update_task(list, li);

        });

    };

};

      

//fonction qui permet de créer une liste

function creat_list() {

    const button_valider = document.getElementById('envoyer');

    button_valider.addEventListener('click', function (e) {

        const nameList = document.getElementById('name');

        let nom = nameList.value;

        if (nom === "") {

            formulaire.style.display = "block";

            alert("Veuillez écrire un nom à votre liste");

            e.preventDefault();

        } else {

            formulaire.style.display = 'none';

            nameList.value = '';

            e.preventDefault(formulaire);

            const list = document.createElement('ul');

            document.body.appendChild(list);

            const span = document.createElement('span');

            span.innerHTML = nom;

            list.appendChild(span);

            span.id = 'nomlist';

            const addbouton = create_Button('+');

            addbouton.classList.add('buttontask');

            span.appendChild(addbouton);

            addbouton.addEventListener('click', function () {

                creat_task(list);

            });

            const delete_liste = create_Button('x');

            delete_liste.id="deleteList";

            span.appendChild(delete_liste);    

            delete_liste.addEventListener('click', function() {

                remove_task(list);

            });      

        };

    });

};
creat_list();

// fin du programme

