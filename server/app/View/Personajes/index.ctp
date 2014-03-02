<?php

/**
 * @var $this view
 */

?>
<!-- File: /app/View/Posts/index.ctp -->

<h1>Personajes</h1>
<?php echo $this->Html->link('Añadir Personaje', array('controller' => 'personajes', 'action' => 'add')); ?>
<table>
    <tr>
        <th>Nombre</th>
        <th>Nivel</th>
        <th>Categoría</th>
        <th>Raza</th>
        <th>Usuario</th>
        <th>Acción</th>
    </tr>

    <!-- Here is where we loop through our $posts array, printing out post info -->

    <?php foreach ($personajes as $personaje): ?>
        <tr>
            <td><?php echo $this->Html->link($personaje['Personaje']['nombre'],
                    array('controller' => 'personajes', 'action' => 'view', $personaje['Personaje']['id'])); ?></td>
            <td><?php echo $personaje['Personaje']['nivel']; ?></td>
            <td><?php echo $personaje['Personaje']['categoria']; ?></td>
            <td><?php echo $personaje['Personaje']['raza']; ?></td>
            <td><?php echo $personaje['User']['username']; ?></td>
            <td><?php
                echo $this->Form->postLink(
                    'Borrar',
                    array('action' => 'delete', $personaje['Personaje']['id']),
                    array('confirm' => '¿Seguro?')) ?>
                <?php
                /*                    echo $this->Form->postLink(
                                        'Cargar en el generador',
                                        array('action' => 'edit', $personaje['Personaje']['id']))*/
                $optionsCreate = array(
                    'type' => 'GET',
                    'url' => 'http://helechaloscuro.net/animaunico/index.html' //TODO cambiar al pasar a produccion
                );
                echo $this->Form->create($optionsCreate);
                echo $this->Form->hidden('id', array(
                    'value' => $personaje['Personaje']['id']
                ));
                echo $this->Form->hidden('carga', array(
                    'value' => '1'
                ));
                $options = array(
                    'label' => 'Carga en Anima: Único'
                );
                echo $this->Form->end($options);
                ?>
            </td>

        </tr>
    <?php endforeach; ?>

</table>