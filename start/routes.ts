import router from '@adonisjs/core/services/router'

const SosController = () => import('#controllers/sos_controller')
const ObstacleController = () => import('#controllers/obstacles_controller')
router.get('/', async () => {
  return { message: 'Smart Cane Backend API is running 🚀' }
})
router.post('/sos', [SosController, 'trigger'])
router.post('/obstacle', [ObstacleController, 'detect'])

