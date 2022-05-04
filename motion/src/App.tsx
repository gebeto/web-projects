import React from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';


const items = [
  {id: "1", title: "Hello 1", details: "Hello 1 My name is guta"},
  {id: "2", title: "Hello 2", details: "Hello 2 My name is guta"},
  {id: "3", title: "Hello 3", details: "Hello 3 My name is guta"},
  {id: "4", title: "Hello 4", details: "Hello 4 My name is guta"},
  {id: "5", title: "Hello 5", details: "Hello 5 My name is guta"},
];


const Item: React.FC<any> = ({ data }) => {
  const [open, setOpen] = React.useState(false);

  console.log(" >>> OPE", open)

  return (
    <motion.div
      onClick={() => setOpen(true)}
      style={{
        padding: 16,
        background: '#fff',
        borderRadius: 8,
        boxShadow: '0px 5px 10px -8px #333',
        border: '1px solid #eee',
        marginBottom: 16,
        cursor: open ? undefined : 'pointer'
      }}
      initial={false}
    >
      <div style={{ display: 'flex' }}>
        <motion.div
          style={{ overflow: 'hidden', width: 0 }}
          animate={{
            width: open ? null : 0,
            opacity: open ? 1 : 0,
            scale: open ? 1 : 0,
          }}
        >
          <button
            style={{ marginRight: 16 }}
            onClick={e => {
              setOpen(false);
              e.stopPropagation();
            }}
          >
            X
          </button>
        </motion.div>
        <motion.h2 style={{ margin: 0, }}>{data.title}</motion.h2>
      </div>
      <motion.div
        style={{
          overflow: "hidden",
          height: 0,
        }}
        animate={{
          height: open ? null : 0,
        }}
      >
        <div style={{ border: '1px solid #eee', borderRadius: 8, padding: 16, marginTop: 16 }}>
          <input />

          <input />
        </div>
      </motion.div>
    </motion.div>
  );
}

export const App = () => {
  const [itemId, setItem] = React.useState<string>();
  const item = React.useMemo(() => items.find(i => i.id === itemId), [itemId]);

  return (
    <div style={{ width: 300, padding: 30 }}>
      <AnimatePresence>
        {items.map(item => (
          <Item key={item.id} data={item} />
        ))}
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          style={{
            position: 'fixed',
            left: '50%',
            top: '50%',
          }}
        >
          {item && (
            <motion.div
              layoutId={itemId}
              style={{
                background: "red",
                width: 200,
                height: 260,
                borderRadius: 16,
              }}
              drag
              dragConstraints={{ left: -100, right: 100, top: -300 }}
              onDragEnd={e => {
                console.log(' >>> END', e)
              }}
            >
              <motion.h2>{item.title}</motion.h2>
              <motion.p>{item.details}</motion.p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App
