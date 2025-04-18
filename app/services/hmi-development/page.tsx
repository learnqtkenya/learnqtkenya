'use client';

import React from 'react';
import {
  Monitor,
  Layers,
  CheckCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';

const HMIDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-white to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/" className="inline-flex items-center text-emerald-600 mb-6">
                <ChevronLeft className="h-4 w-4 mr-1" />
                <span>Back to Home</span>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                HMI Development
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Custom human-machine interface solutions designed for optimal user experience and device functionality.
              </p>
              <div className="flex space-x-4">
                <Link href="#contact">
                  <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm">
                    Start Your Project
                  </button>
                </Link>
                <Link href="#technologies">
                  <button className="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors">
                    Our Technologies
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-emerald-200">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">HMI Specializations</h3>
                <div className="space-y-4">
                  {[
                    'Responsive and Intuitive HMIs with Qt',
                    'Light-weight HMIs with LVGL',
                    'Embedded HMIs with TouchGFX',
                    'Custom OpenGL/Vulkan interfaces',
                    'Gesture & multi-touch support',
                    'Embedded web interfaces'
                  ].map((capability) => (
                    <div key={capability} className="flex items-center space-x-3">
                      <CheckCircle className="text-emerald-600 h-5 w-5 flex-shrink-0" />
                      <span className="text-gray-600">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="/images/services/multi-touch.jpg"
              alt="HMI Development"
              className="rounded-lg shadow-sm"
            />
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Creating Intuitive Human-Machine Interfaces</h2>
              <p className="text-gray-600 mb-6">
                Our HMI development services bridge the gap between complex hardware functionality and intuitive user experience. We create custom interfaces that are not only visually appealing but also enhance the functionality of your embedded systems.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you need a simple touch interface for a consumer device or a sophisticated control panel for industrial equipment, our team delivers HMI solutions optimized for your specific hardware constraints and user requirements.
              </p>
              <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                <h4 className="font-semibold text-gray-900 mb-2">Why our HMI solutions stand out:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Balanced between performance and visual appeal</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Optimized for resource-constrained embedded systems</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Designed with user research and testing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 px-4 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our HMI Technologies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* LVGL */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-emerald-100">
              <h3 className="text-xl font-bold mb-4 text-gray-900">LVGL</h3>
              <p className="text-gray-600 mb-6">
                Light and Versatile Graphics Library for creating embedded GUIs with smooth animations and modern appearance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Low resource requirements</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Hardware acceleration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Rich widget library</span>
                </li>
              </ul>
            </div>
            
            {/* TouchGFX */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-emerald-100">
              <h3 className="text-xl font-bold mb-4 text-gray-900">TouchGFX</h3>
              <p className="text-gray-600 mb-6">
                High-performance C++ graphics framework optimized for STM32 microcontrollers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Smartphone-like experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Drag-and-drop designer</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">STM32 optimization</span>
                </li>
              </ul>
            </div>
            
            {/* Qt */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-emerald-100">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Qt</h3>
              <p className="text-gray-600 mb-6">
                Cross-platform framework for developing advanced embedded interfaces with QML and C++.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Advanced animations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Cross-platform support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Comprehensive tooling</span>
                </li>
              </ul>
            </div>
            
            {/* Custom OpenGL/Vulkan */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-emerald-100">
              <h3 className="text-xl font-bold mb-4 text-gray-900">OpenGL/Vulkan</h3>
              <p className="text-gray-600 mb-6">
                Custom graphics solutions for maximum performance and unique visual requirements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Maximum performance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Custom visual effects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Hardware-specific optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our HMI Development Process</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">1</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Requirements Analysis</h3>
              <p className="text-gray-600">
                Understanding device capabilities, user needs, and functional requirements to determine the optimal HMI approach.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">2</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">UI/UX Design</h3>
              <p className="text-gray-600">
                Creating wireframes and visual designs optimized for your specific hardware constraints and user scenarios.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">3</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Implementation</h3>
              <p className="text-gray-600">
                Developing the interface using the most appropriate framework (LVGL, TouchGFX, Qt, or custom solution).
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">4</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Testing & Optimization</h3>
              <p className="text-gray-600">
                Refining performance, responsiveness, and usability through rigorous testing on target hardware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Featured HMI Project</h2>
          
          <div className="bg-white rounded-xl shadow-sm p-8 border border-emerald-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                src="/images/parcel-point/locker/1.jpeg"
                alt="ParcelPoint HMI"
                className="rounded-lg shadow-sm"
              />
              <div>
                <div className="mb-4 inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                  Qt Implementation
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">ParcelPoint Smart Locker HMI</h3>
                <p className="text-gray-600 mb-6">
                  We developed an intuitive touchscreen interface for the ParcelPoint Smart Locker system that enables
                  users to quickly verify, deposit or retrieve packages, and complete payments with minimal steps.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Optimized for 10.1" capacitive touchscreen',
                    'Integration with custom hardware',
                    'Fast local SMS gateway integration',
                    'M-PESA payment flow integration'
                    ].map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/case-studies/parcelpoint">
                  <button className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
                    <span>View Full Case Study</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Start Your HMI Project</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Ready to create an intuitive interface for your embedded system? Let's discuss how our HMI
            development expertise can bring your vision to life.
          </p>
          <ContactForm />
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

export default HMIDevelopmentPage;