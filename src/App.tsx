import { motion, AnimatePresence } from 'framer-motion';
import Routes from './routes/index';
function App() {
   return (
      <AnimatePresence>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeIn' }}
         >
            <Routes />
         </motion.div>
      </AnimatePresence>
   );
}

export default App;
