import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dear Madam Ji,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
      


      

To my favourite human with whom I share my laughs and love:

When I wished to write something for your day, trust me I wanted to avoid all those cliche lines that lovers write. 
I wanted to write something fresh, something which was never written for anyone. But when I thought about us,
 I realised how you, just by coming into my life, have made me live those cliches.
  Now I see a flower and know why people say it's beautiful. Now I know how lovely it is to be cringe sometimes.
   Now I know, even after seeing one's lover umpteenth time, each and every time they see them for the first time.
    These were the cliche things I did not want to write but it's you my love. It's you who can make great things out of nothing.
     You're a wonderful woman and I just don't know what I have done to have you in my life.
      You're made for great things and I know that you will achieve them. I love you. Please be with me always. 🎈
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          and on your special day, i wish you the happiest birthday
        </p>
      </motion.div>
    </div>
  );
};

export default Message;