'use client';

import React from 'react';
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Monitor,
  Code,
  Layers,
  Server
} from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';

const ParcelPointCaseStudyPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-white dark:from-gray-900 to-emerald-50 dark:to-emerald-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center text-emerald-600 dark:text-emerald-500 mb-6 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
            <ChevronLeft className="h-4 w-4 mr-1" />
            <span>Back to Home</span>
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4 inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-400 rounded-full text-sm font-medium">
                Case Study
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                ParcelPoint Smart Locker System
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                An end-to-end embedded solution showcasing our expertise in hardware design, firmware development, and HMI implementation.
              </p>
              <div className="flex space-x-4">
                <Link href="#contact">
                  <button className="bg-emerald-600 dark:bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors shadow-sm">
                    Start Similar Project
                  </button>
                </Link>
                <Link href="#technical-details">
                  <button className="border-2 border-emerald-600 dark:border-emerald-500 text-emerald-600 dark:text-emerald-500 px-6 py-3 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors">
                    Technical Details
                  </button>
                </Link>
              </div>
            </div>
            <img
              src="/images/parcel-point/locker/1.jpeg"
              alt="ParcelPoint Smart Locker"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Project Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                ParcelPoint is an automated locker system designed to streamline package delivery and collection in urban areas. 
                We developed a complete embedded solution that included custom hardware, secure firmware, and 
                an intuitive human-machine interface.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our integrated approach combined hardware design, firmware development, and HMI implementation to create a 
                reliable, user-friendly system that connects seamlessly with cloud services and mobile applications.
              </p>
              <div className="bg-emerald-50 dark:bg-gray-800 p-6 rounded-lg border border-emerald-200 dark:border-emerald-900">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Challenges:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Creating a secure system for unattended package management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Design and select power-efficient hardware for extended operation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Implementing an intuitive touchscreen interface for all users</span>
                  </li>
                </ul>
              </div>
            </div>
            <img
              src="/api/placeholder/600/400"
              alt="ParcelPoint System Overview"
              className="rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
            />
          </div>
        </div>
      </section>

      {/* Solution Components */}
      <section id="technical-details" className="py-20 px-4 bg-emerald-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Our End-to-End Solution</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Hardware Design */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-8 border border-emerald-100 dark:border-emerald-900">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mb-6">
                <Cpu className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Hardware Design</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Custom hardware with integrated peripherals to control multiple locker compartments and manage user interactions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Arm64 Microprocessor</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Custom hardware CU for electronic locks</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Efficient power management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">4G/LTE cellular connectivity</span>
                </li>
              </ul>
            </div>
            
            {/* Embedded Firmware */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-8 border border-emerald-100 dark:border-emerald-900">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Embedded Firmware</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Event-driven firmware architecture providing secure, reliable operation with power management optimization.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Secure communication protocols</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">OTA firmware update capability</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Advanced power management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Comprehensive error handling</span>
                </li>
              </ul>
            </div>
            
            {/* HMI Development */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-8 border border-emerald-100 dark:border-emerald-900">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mb-6">
                <Monitor className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">HMI Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Intuitive touchscreen interface optimized for quick interactions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Qt-based graphics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">10.1" capacitive touchscreen</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">M-PESA payment flow</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* System Integration */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-8 border border-emerald-100 dark:border-emerald-900">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Layers className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">System Integration</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Seamless integration of hardware, firmware, and HMI components into a cohesive system.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Hardware abstraction layers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Peripheral driver integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">End-to-end testing framework</span>
                </li>
              </ul>
            </div>
            
            {/* Cloud Connectivity */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-8 border border-emerald-100 dark:border-emerald-900">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Server className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Cloud Connectivity</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Secure communication with cloud services for remote management and mobile app integration.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">TLS-secured API communication</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Efficient data synchronization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Mobile app integration endpoints</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Development Process</h2>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Phase 1 */}
              <div className="bg-emerald-50 dark:bg-gray-800 rounded-xl p-8 border border-emerald-100 dark:border-emerald-900">
                <div className="w-12 h-12 bg-emerald-600 dark:bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">1</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Requirements Analysis</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Gathering detailed specifications and analyzing user needs to define system requirements.
                </p>
              </div>
              
              {/* Phase 2 */}
              <div className="bg-emerald-50 dark:bg-gray-800 rounded-xl p-8 border border-emerald-100 dark:border-emerald-900">
                <div className="w-12 h-12 bg-emerald-600 dark:bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">2</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">System Architecture</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Designing the hardware and firmware architecture to meet all functional requirements.
                </p>
              </div>
              
              {/* Phase 3 */}
              <div className="bg-emerald-50 dark:bg-gray-800 rounded-xl p-8 border border-emerald-100 dark:border-emerald-900">
                <div className="w-12 h-12 bg-emerald-600 dark:bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">3</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Hardware & Firmware</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Parallel development of PCB design and embedded firmware components.
                </p>
              </div>
              
              {/* Phase 4 */}
              <div className="bg-emerald-50 dark:bg-gray-800 rounded-xl p-8 border border-emerald-100 dark:border-emerald-900">
                <div className="w-12 h-12 bg-emerald-600 dark:bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">4</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">HMI Implementation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Developing the user interface with Qt and integrating with firmware.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Phase 5 */}
              <div className="bg-emerald-50 dark:bg-gray-800 rounded-xl p-8 border border-emerald-100 dark:border-emerald-900">
                <div className="w-12 h-12 bg-emerald-600 dark:bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">5</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Integration & Testing</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bringing all components together and performing comprehensive system testing.
                </p>
              </div>
              
              {/* Phase 6 */}
              <div className="bg-emerald-50 dark:bg-gray-800 rounded-xl p-8 border border-emerald-100 dark:border-emerald-900">
                <div className="w-12 h-12 bg-emerald-600 dark:bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">6</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Prototyping</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building functional prototypes for field testing and usability evaluation.
                </p>
              </div>
              
              {/* Phase 7 */}
              <div className="bg-emerald-50 dark:bg-gray-800 rounded-xl p-8 border border-emerald-100 dark:border-emerald-900">
                <div className="w-12 h-12 bg-emerald-600 dark:bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">7</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Production & Deployment</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Preparing manufacturing documentation and supporting production deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Gallery Section */}
      <section className="py-20 px-4 bg-emerald-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Results & Impact</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                The ParcelPoint Smart Locker system has been successfully deployed in multiple locations, providing
                a secure and convenient solution for package management. The system has demonstrated exceptional reliability
                with minimal maintenance requirements.
              </p>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Operational Efficiency</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Reduced package handling time by 78% compared to traditional methods
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">User Satisfaction</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Average user rating of 4.8/5 based on feedback
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">System Reliability</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    99.7% uptime with minimal maintenance requirements
                  </p>
                </div>
              </div>
            </div>
            
            {/* <div className="grid grid-cols-2 gap-4">
              <img
                src="/api/placeholder/300/200"
                alt="ParcelPoint Installation"
                className="rounded-lg shadow-sm"
              />
              <img
                src="/api/placeholder/300/200"
                alt="ParcelPoint HMI Screen"
                className="rounded-lg shadow-sm"
              />
              <img
                src="/api/placeholder/300/200"
                alt="ParcelPoint PCB"
                className="rounded-lg shadow-sm"
              />
              <img
                src="/api/placeholder/300/200"
                alt="ParcelPoint User"
                className="rounded-lg shadow-sm"
              />
            </div> */}
          </div>
          
          <div className="text-center">
            <Link href="#contact">
              <button className="inline-flex items-center space-x-2 bg-emerald-600 dark:bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors">
                <span>Start a Similar Project</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-emerald-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Start Your Embedded Project</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
            Interested in developing a similar end-to-end embedded solution? Let's discuss how our expertise
            in hardware design, firmware development, and HMI can bring your vision to life.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Related Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* HMI Development */}
            <div className="bg-emerald-50 dark:bg-gray-800 rounded-xl p-8 border border-emerald-100 dark:border-emerald-900">
              <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Monitor className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">HMI Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Custom UI solutions with LVGL, TouchGFX, Qt, and OpenGL/Vulkan-based interfaces.
              </p>
              <Link href="/services/hmi-development">
                <button className="inline-flex items-center space-x-2 text-emerald-600 dark:text-emerald-500 hover:text-emerald-800 dark:hover:text-emerald-400 transition-colors">
                  <span>Learn More</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
            
            {/* Embedded Firmware */}
            <div className="bg-emerald-50 dark:bg-gray-800 rounded-xl p-8 border border-emerald-100 dark:border-emerald-900">
              <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Code className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Embedded Firmware</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Expertise in bare-metal programming, RTOS, and power-efficient firmware design.
              </p>
              <Link href="/services/embedded-firmware">
                <button className="inline-flex items-center space-x-2 text-emerald-600 dark:text-emerald-500 hover:text-emerald-800 dark:hover:text-emerald-400 transition-colors">
                  <span>Learn More</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
            
            {/* Embedded Systems Design */}
            <div className="bg-emerald-50 dark:bg-gray-800 rounded-xl p-8 border border-emerald-100 dark:border-emerald-900">
              <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Layers className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Embedded Systems Design</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                End-to-end services from PCB design to optimized firmware implementation.
              </p>
              <Link href="/services/embedded-systems-design">
                <button className="inline-flex items-center space-x-2 text-emerald-600 dark:text-emerald-500 hover:text-emerald-800 dark:hover:text-emerald-400 transition-colors">
                  <span>Learn More</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        sections={[
          {
            title: 'Services',
            links: [
              { label: 'HMI Development', href: '/services/hmi-development' },
              { label: 'Embedded Firmware', href: '/services/embedded-firmware' },
              { label: 'Embedded Systems Design', href: '/services/embedded-systems-design' },
              { label: 'IoT Solutions', href: '/services/iot-solutions' }
            ]
          },
          {
            title: 'Case Studies',
            links: [
              { label: 'ParcelPoint', href: '/case-studies/parcelpoint' }
            ]
          }
        ]}
      />
    </div>
  );
};

export default ParcelPointCaseStudyPage;