'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CodeEditor from '@/components/CodeEditor/CodeEditor';

const EditorPage = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  const [activeBottomTab, setActiveBottomTab] = useState('console');
  const [sidebarWidth, setSidebarWidth] = useState(280);
  const [bottomPanelHeight, setBottomPanelHeight] = useState(200);

  const bottomTabs = [
    { id: 'console', label: 'Console', icon: '⚡' },
    { id: 'terminal', label: 'Terminal', icon: '💻' },
    { id: 'problems', label: 'Problems', icon: '🔍' },
    { id: 'output', label: 'Output', icon: '📤' },
  ];

  const mockConsoleOutput = [
    { type: 'log', text: 'Welcome to CollabCode IDE', time: '14:32:01' },
    { type: 'log', text: 'Project initialized successfully', time: '14:32:02' },
    { type: 'warn', text: 'Development server starting...', time: '14:32:03' },
    { type: 'success', text: 'Server running on http://localhost:3000', time: '14:32:05' },
  ];

  const mockProblems = [
    { type: 'error', message: 'Unused variable: count', file: 'App.js', line: 12 },
    { type: 'warning', message: 'Missing semicolon', file: 'index.js', line: 5 },
  ];

  return (
    <div className="h-screen bg-[#0d1117] text-white overflow-hidden flex flex-col">
      {/* Top Navigation Bar */}
      <div className="h-12 bg-[#161b22] border-b border-[#30363d] flex items-center justify-between px-4 z-50">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-teal-400 rounded-md flex items-center justify-center">
              <span className="text-black font-bold text-xs">CC</span>
            </div>
            <span className="font-semibold text-sm">CollabCode IDE</span>
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-gray-400">
            <span>📁 my-project</span>
            <span>/</span>
            <span className="text-teal-400">main</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Collaboration indicators */}
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-1">
              <div className="w-6 h-6 bg-teal-500 rounded-full border-2 border-[#161b22] flex items-center justify-center text-xs text-black font-medium">A</div>
              <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-[#161b22] flex items-center justify-center text-xs text-white font-medium">B</div>
              <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-[#161b22] flex items-center justify-center text-xs text-white font-medium">+2</div>
            </div>
            <div className="flex items-center space-x-1 text-xs text-teal-400">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              <span>Live</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-2">
            <motion.button
              className="px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-medium rounded-md transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ▶ Run
            </motion.button>
            <motion.button
              className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-xs font-medium rounded-md transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🔗 Share
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Code Editor - Enhanced */}
        <div className="flex-1 flex flex-col">
          <CodeEditor />
        </div>
      </div>

      {/* Bottom Panel */}
      <motion.div
        className="bg-[#161b22] border-t border-[#30363d] flex flex-col"
        style={{ height: isTerminalOpen ? bottomPanelHeight : 40 }}
        initial={false}
        animate={{ height: isTerminalOpen ? bottomPanelHeight : 40 }}
        transition={{ duration: 0.3 }}
      >
        {/* Bottom Panel Tabs */}
        <div className="flex items-center justify-between h-10 px-4 bg-[#21262d]">
          <div className="flex items-center space-x-1">
            {bottomTabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => {
                  setActiveBottomTab(tab.id);
                  if (!isTerminalOpen) setIsTerminalOpen(true);
                }}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  activeBottomTab === tab.id
                    ? 'bg-[#0d1117] text-teal-400 border border-[#30363d]'
                    : 'text-gray-400 hover:text-white hover:bg-[#30363d]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-1">{tab.icon}</span>
                {tab.label}
              </motion.button>
            ))}
          </div>
          
          <motion.button
            onClick={() => setIsTerminalOpen(!isTerminalOpen)}
            className="text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isTerminalOpen ? '▼' : '▲'}
          </motion.button>
        </div>

        {/* Bottom Panel Content */}
        {isTerminalOpen && (
          <div className="flex-1 overflow-hidden">
            {activeBottomTab === 'console' && (
              <div className="h-full p-4 font-mono text-sm overflow-y-auto">
                <div className="space-y-1">
                  {mockConsoleOutput.map((entry, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <span className="text-gray-500 text-xs w-20 flex-shrink-0">{entry.time}</span>
                      <span className={`${
                        entry.type === 'error' ? 'text-red-400' :
                        entry.type === 'warn' ? 'text-yellow-400' :
                        entry.type === 'success' ? 'text-green-400' :
                        'text-gray-300'
                      }`}>
                        {entry.text}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-teal-400">❯</span>
                    <input
                      type="text"
                      placeholder="Type a command..."
                      className="bg-transparent border-none outline-none text-white flex-1"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeBottomTab === 'terminal' && (
              <div className="h-full p-4 font-mono text-sm bg-[#0d1117]">
                <div className="space-y-1">
                  <div className="text-gray-300">$ npm start</div>
                  <div className="text-green-400">Starting development server...</div>
                  <div className="text-gray-300">Local: http://localhost:3000</div>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-teal-400">user@collabcode:~/my-project$</span>
                    <input
                      type="text"
                      className="bg-transparent border-none outline-none text-white flex-1"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeBottomTab === 'problems' && (
              <div className="h-full p-4 overflow-y-auto">
                <div className="space-y-2">
                  {mockProblems.map((problem, index) => (
                    <div key={index} className="flex items-start space-x-3 p-2 hover:bg-[#21262d] rounded-md cursor-pointer">
                      <span className={`${
                        problem.type === 'error' ? 'text-red-400' : 'text-yellow-400'
                      }`}>
                        {problem.type === 'error' ? '❌' : '⚠️'}
                      </span>
                      <div className="flex-1">
                        <div className="text-sm text-white">{problem.message}</div>
                        <div className="text-xs text-gray-400">{problem.file}:{problem.line}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeBottomTab === 'output' && (
              <div className="h-full p-4 font-mono text-sm overflow-y-auto">
                <div className="space-y-1 text-gray-300">
                  <div>Building project...</div>
                  <div className="text-green-400">✓ Compiled successfully</div>
                  <div>Files: 12 changed, 3 added</div>
                  <div>Size: 2.3 MB</div>
                  <div className="text-teal-400">Ready in 1.2s</div>
                </div>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default EditorPage;
