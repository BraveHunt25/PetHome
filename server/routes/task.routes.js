/*
Este archivo tiene la finalidad de asignar una URL a cada función o petición creada en 
'task.routes', así como indicar qué tipo de ruta es: Consultar(Get), Registrar(Post), 
Actualizar(Put) y Eliminar(Delete).
*/
import { Router } from "express";
import { 
    obtener_Catalogo_Alimentos,
    obtener_Alimento,
    agregar_Alimento,
    actualizar_Alimento,
    eliminar_Alimento
} from '../controllers/catalogo_alimentos.controllers.js' //Consulte el archivo para más información
import { 
    obtener_Especies,
    obtener_Solo_Especies,
    obtener_Especie,
    agregar_Especie,
    actualizar_Especie,
    eliminar_Especie
} from '../controllers/especies.controllers.js' //Consulte el archivo para más información
import { 
    obtener_Medicamentos,
    obtener_Medicamento,
    agregar_Medicamento,
    actualizar_Medicamento,
    eliminar_Medicamento
} from '../controllers/medicamentos.controllers.js' //Consulte el archivo para más información
import { 
    obtener_Cartillas_Mascotas,
    obtener_Cartilla_Mascota,
    agregar_Medicamento_A_Cartilla_Mascota,
    actualizar_Medicamento_En_Cartilla_Mascota,
    eliminar_Cartilla_Mascota,
    eliminar_Medicamento_De_Cartilla_Mascota
} from '../controllers/cartilla_mascotas.controllers.js' //Consulte el archivo para más información
import { 
    obtener_Medicamentos_Recetados,
    obtener_Mascotas_Medicadas,
    agregar_Medicamento_Mascota,
    actualizar_Medicamento_Mascota,
    eliminar_Mascota_Medicada,
    eliminar_Medicamento_Recetado
} from '../controllers/medicamentos_recetados.controllers.js' //Consulte el archivo para más información
import { 
    obtener_Cuidados_Mascotas,
    obtener_Cuidados_Mascota,
    agregar_Cuidados_Mascota,
    actualizar_Cuidados_Mascota,
    eliminar_Cuidados_Mascota
} from '../controllers/cuidados_rutinarios.controllers.js' //Consulte el archivo para más información
import { 
    obtener_Razas,
    obtener_Solo_Razas,
    obtener_Razas_Por_Especie,
    agregar_Raza,
    actualizar_Raza,
    eliminar_Raza
} from '../controllers/razas.controllers.js' //Consulte el archivo para más información
import { 
    obtener_Clientes,
    obtener_Cliente,
    agregar_Cliente,
    actualizar_Cliente,
    eliminar_Cliente    
} from '../controllers/clientes.controllers.js' //Consulte el archivo para más información
import { 
    obtener_Numeros_Clientes,
    obtener_Numeros_Cliente,
    agregar_Numero_Cliente,
    actualizar_Numero_Cliente,
    eliminar_Numero_Cliente,
    eliminar_Numeros_Cliente
} from '../controllers/numeros_telefonicos.controllers.js' //Consulte el archivo para más información
import { 
    obtener_Correos_Clientes,
    obtener_Correos_Cliente,
    agregar_Correo_Cliente,
    actualizar_Correo_Cliente,
    eliminar_Correos_Cliente,
    eliminar_Correo_Cliente
} from '../controllers/correos_electronicos.controllers.js' //Consulte el archivo para más información
import { 
    obtener_Direcciones_Clientes,
    obtener_Direcciones_Cliente,
    agregar_Direccion_Cliente,
    actualizar_Direccion_Cliente,
    eliminar_Direccion_Cliente,
    eliminar_Direcciones_Cliente
} from '../controllers/direcciones_referencia.controllers.js' //Consulte el archivo para más información
import { 
    obtener_Resevaciones,
    obtener_Reservacion,
    agregar_Reservacion,
    actualizar_Reservacion,
    eliminar_Reservacion
} from '../controllers/reservacion.controllers.js' //Consulte el archivo para más información
import { 
    obtener_Mascotas,
    obtener_Mascota,
    agregar_Mascota,
    actualizar_Mascota,
    eliminar_Mascota
} from '../controllers/mascotas.controllers.js' //Consulte el archivo para más información
import { 
    obtener_Catalogo_Cuartos,
    agregar_Cuarto_Catalogo_Cuartos,
    actualizar_Cuarto_Catalogo_Cuartos,
    eliminar_Cuarto_Catalogo_Cuartos
} from '../controllers/catalogo_cuartos.controllers.js' //Consulte el archivo para más información
import { 
    obtener_Sucursales,
    agregar_Sucursal,
    actualizar_Sucursal,
    eliminar_Sucursal
} from '../controllers/sucursales.controllers.js' //Consulte el archivo para más información
import { 
    obtener_Servicios,
    agregar_Servicio,
    actualizar_Servicio,
    eliminar_Servicio
} from '../controllers/catalogo_servicios.controllers.js' //Consulte el archivo para más información
import { 
    obtener_Empleados,
    agregar_Empleado,
    actualizar_Empleado,
    eliminar_Empleado
} from '../controllers/empleados.controllers.js' //Consulte el archivo para más información
import { 
    obtener_Empleados_Sucursal,
    agregar_Empleado_Sucursal,
    actualizar_Empleado_Sucursal,
    eliminar_Empleado_Sucursal
} from '../controllers/suc_emp.controllers.js' //Consulte el archivo para más información
import { 
    obtener_Todos_Cuartos,
    obtener_Cuartos_Sucursal,
    obtener_Cuartos_Sucursal_Tipo,
    agregar_Cuarto_Sucursal,
    actualizar_Cuarto_Sucursal,
    eliminar_Cuarto_Sucursal
} from '../controllers/cuartos.controllers.js' //Consulte el archivo para más información
import { 
    obtener_Hospedajes_Sucursal,
    obtener_Hospedaje_Sucursal,
    obtener_Todos_Hospedajes,
    agregar_Hospedaje_Sucursal,
    actualizar_Hospedaje_Sucursal,
    eliminar_Hospedaje_Sucursal
} from '../controllers/hospedaje.controllers.js' //Consulte el archivo para más información
import { 
    obtener_Citas,
    obtener_Citas_Hospedaje,
    obtener_Cita,
    agregar_Cita,
    actualizar_Cita,
    eliminar_Cita
} from '../controllers/citas.controllers.js' //Consulte el archivo para más información
import { 
    obtener_Resenas_Citas,
    obtener_Resena_Cita,
    agregar_Resena_Cita,
    actualizar_Resena_Cita,
    eliminar_Resena_Cita
} from '../controllers/resena_citas.controllers.js' //Consulte el archivo para más información
import { 
    obtener_Resenas_Hotel,
    obtener_Resena_Hotel,
    agregar_Resena_Hotel,
    actualizar_Resena_Hotel,
    eliminar_Resena_Hotel
} from '../controllers/resena_hotel.controllers.js' //Consulte el archivo para más información

const router = Router();

router.get('/catalogo_alimentos', obtener_Catalogo_Alimentos);
router.get('/catalogo_alimentos/:id', obtener_Alimento);
router.post('/catalogo_alimentos', agregar_Alimento);
router.put('/catalogo_alimentos/:id', actualizar_Alimento);
router.delete('/catalogo_alimentos/:id', eliminar_Alimento);

router.get('/especies', obtener_Especies);
router.get('/especies/porEspecie', obtener_Solo_Especies);
router.get('/especies/:especie', obtener_Especie);
router.post('/especies', agregar_Especie);
router.put('/especies/:especie', actualizar_Especie);
router.delete('/especies/:especie', eliminar_Especie);

router.get('/medicamentos', obtener_Medicamentos);
router.get('/medicamentos/:id', obtener_Medicamento);
router.post('/medicamentos', agregar_Medicamento);
router.put('/medicamentos/:id', actualizar_Medicamento);
router.delete('/medicamentos/:id', eliminar_Medicamento);

router.get('/cartillas_mascotas', obtener_Cartillas_Mascotas);
router.get('/cartillas_mascotas/:id', obtener_Cartilla_Mascota);
router.post('/cartillas_mascotas/:id', agregar_Medicamento_A_Cartilla_Mascota);
router.put('/cartillas_mascotas/:id', actualizar_Medicamento_En_Cartilla_Mascota);
router.delete('/cartillas_mascotas/:id', eliminar_Cartilla_Mascota);
router.delete('/cartillas_mascotas/:id/:idMedicamento', eliminar_Medicamento_De_Cartilla_Mascota);

router.get('/medicamentos_recetados', obtener_Mascotas_Medicadas);
router.get('/medicamentos_recetados/:id', obtener_Medicamentos_Recetados);
router.post('/medicamentos_recetados/:id', agregar_Medicamento_Mascota);
router.put('/medicamentos_recetados/:id', actualizar_Medicamento_Mascota);
router.delete('/medicamentos_recetados/:id', eliminar_Mascota_Medicada);
router.delete('/medicamentos_recetados/:id/:idMedicamento', eliminar_Medicamento_Recetado);

router.get('/cuidados_rutinarios', obtener_Cuidados_Mascotas);
router.get('/cuidados_rutinarios/:id', obtener_Cuidados_Mascota);
router.post('/cuidados_rutinarios/:id', agregar_Cuidados_Mascota);
router.put('/cuidados_rutinarios/:id', actualizar_Cuidados_Mascota);
router.delete('/cuidados_rutinarios/:id', eliminar_Cuidados_Mascota);

router.get('/razas', obtener_Razas);
router.get('/razas/porRaza', obtener_Solo_Razas);
router.get('/razas/:especie', obtener_Razas_Por_Especie);
router.post('/razas', agregar_Raza);
router.put('/razas/:raza', actualizar_Raza);
router.delete('/razas/:raza', eliminar_Raza);

router.get('/clientes', obtener_Clientes);
router.get('/clientes/:curp', obtener_Cliente);
router.post('/clientes', agregar_Cliente);
router.put('/clientes/:curp', actualizar_Cliente);
router.delete('/clientes/:curp', eliminar_Cliente);

router.get('/numeros_telefonicos', obtener_Numeros_Clientes);
router.get('/numeros_telefonicos/:curp', obtener_Numeros_Cliente);
router.post('/numeros_telefonicos', agregar_Numero_Cliente);
router.put('/numeros_telefonicos/:curp/:numero', actualizar_Numero_Cliente);
router.delete('/numeros_telefonicos/:curp/:numero', eliminar_Numero_Cliente);
router.delete('/numeros_telefonicos/:curp', eliminar_Numeros_Cliente);

router.get('/correos_electronicos', obtener_Correos_Clientes);
router.get('/correos_electronicos/:curp', obtener_Correos_Cliente);
router.post('/correos_electronicos', agregar_Correo_Cliente);
router.put('/correos_electronicos/:curp/:correo', actualizar_Correo_Cliente);
router.delete('/correos_electronicos/:curp/:correo', eliminar_Correo_Cliente);
router.delete('/correos_electronicos/:curp', eliminar_Correos_Cliente);

router.get('/direcciones_referencia', obtener_Direcciones_Clientes);
router.get('/direcciones_referencia/:curp', obtener_Direcciones_Cliente);
router.post('/direcciones_referencia', agregar_Direccion_Cliente);
router.put('/direcciones_referencia/:curp/:calle', actualizar_Direccion_Cliente);
router.delete('/direcciones_referencia/:curp/:calle', eliminar_Direccion_Cliente);
router.delete('/direcciones_referencia/:curp', eliminar_Direcciones_Cliente);

router.get('/reservaciones', obtener_Resevaciones);
router.get('/reservaciones/:id', obtener_Reservacion);
router.post('/reservaciones', agregar_Reservacion);
router.put('/reservaciones/:id', actualizar_Reservacion);
router.delete('/reservaciones/:id', eliminar_Reservacion);

router.get('/mascotas', obtener_Mascotas);
router.get('/mascotas/:id', obtener_Mascota);
router.post('/mascotas', agregar_Mascota);
router.put('/mascotas/:id', actualizar_Mascota);
router.delete('/mascotas/:id', eliminar_Mascota);

router.get('/catalogo_cuartos', obtener_Catalogo_Cuartos);
router.post('/catalogo_cuartos', agregar_Cuarto_Catalogo_Cuartos);
router.put('/catalogo_cuartos/:idTipo', actualizar_Cuarto_Catalogo_Cuartos);
router.delete('/catalogo_cuartos/:idTipo', eliminar_Cuarto_Catalogo_Cuartos);

router.get('/sucursales', obtener_Sucursales);
router.post('/sucursales', agregar_Sucursal);
router.put('/sucursales/:idTipo', actualizar_Sucursal);
router.delete('/sucursales/:idTipo', eliminar_Sucursal);

router.get('/servicios', obtener_Servicios);
router.post('/servicios', agregar_Servicio);
router.put('/servicios/:id', actualizar_Servicio);
router.delete('/servicios/:id', eliminar_Servicio);

router.get('/empleados', obtener_Empleados);
router.post('/empleados', agregar_Empleado);
router.put('/empleados/:id', actualizar_Empleado);
router.delete('/empleados/:id', eliminar_Empleado);

router.get('/empleados_sucursal/:sucursal', obtener_Empleados_Sucursal);
router.post('/empleados_sucursal/:sucursal', agregar_Empleado_Sucursal);
router.put('/empleados_sucursal/:sucursal/:id', actualizar_Empleado_Sucursal);
router.delete('/empleados_sucursal/:sucursal/:id', eliminar_Empleado_Sucursal);

router.get('/cuartos', obtener_Todos_Cuartos);
router.get('/cuartos/:sucursal', obtener_Cuartos_Sucursal);
router.get('/cuartos/:sucursal/:tipo', obtener_Cuartos_Sucursal_Tipo);
router.post('/cuartos/:sucursal', agregar_Cuarto_Sucursal);
router.put('/cuartos/:sucursal/:id', actualizar_Cuarto_Sucursal);
router.delete('/cuartos/:sucursal/:id', eliminar_Cuarto_Sucursal);

router.get('/hospedaje', obtener_Todos_Hospedajes);
router.get('/hospedaje/:sucursal', obtener_Hospedajes_Sucursal);
router.get('/hospedaje/:sucursal/:id', obtener_Hospedaje_Sucursal);
router.post('/hospedaje/:sucursal', agregar_Hospedaje_Sucursal);
router.put('/hospedaje/:sucursal/:id', actualizar_Hospedaje_Sucursal);
router.delete('/hospedaje/:sucursal/:id', eliminar_Hospedaje_Sucursal); 

router.get('/citas', obtener_Citas);
router.get('/citas/:hospedaje', obtener_Citas_Hospedaje);
router.get('/citas/:hospedaje/:id', obtener_Cita);
router.post('/citas/:hospedaje', agregar_Cita);
router.put('/citas/:hospedaje/:id', actualizar_Cita);
router.delete('/citas/:hospedaje/:id', eliminar_Cita);

router.get('/resenas_citas', obtener_Resenas_Citas);
router.get('/resenas_citas/:id', obtener_Resena_Cita);
router.post('/resenas_citas', agregar_Resena_Cita);
router.put('/resenas_citas/:id', actualizar_Resena_Cita);
router.delete('/resenas_citas/:id', eliminar_Resena_Cita);


router.get('/resenas_hotel', obtener_Resenas_Hotel);
router.get('/resenas_hotel/:id', obtener_Resena_Hotel);
router.post('/resenas_hotel', agregar_Resena_Hotel);
router.put('/resenas_hotel/:id', actualizar_Resena_Hotel);
router.delete('/resenas_hotel/:id', eliminar_Resena_Hotel);

export default router;