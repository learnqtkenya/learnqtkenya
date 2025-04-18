'use client';

import React from 'react';
import {
  Layers,
  Cpu,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Server,
  Workflow
} from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';

const EmbeddedSystemsDesignPage = () => {
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
                Embedded Systems Design
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                End-to-end services from PCB design to optimized firmware implementation.
              </p>
              <div className="flex space-x-4">
                <Link href="#contact">
                  <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm">
                    Start Your Project
                  </button>
                </Link>
                <Link href="#process">
                  <button className="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors">
                    Our Process
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-emerald-200">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Full-Stack Embedded Solutions</h3>
                <div className="space-y-4">
                  {[
                    'Hardware architecture design',
                    'PCB design and layout',
                    'Component selection and BOM management',
                    'Firmware development',
                    'HMI integration',
                    'Testing and certification support'
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
              src="/api/placeholder/600/400"
              alt="Embedded Systems Design"
              className="rounded-lg shadow-sm"
            />
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Comprehensive Embedded System Solutions</h2>
              <p className="text-gray-600 mb-6">
                Our embedded systems design services encompass the entire development lifecycle, from initial concept to manufacturing-ready designs. We combine hardware expertise, firmware development skills, and system integration know-how to deliver cohesive, reliable embedded solutions.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you need a custom IoT device, industrial control system, or consumer product, our team provides end-to-end engineering services tailored to your specific requirements and constraints.
              </p>
              <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                <h4 className="font-semibold text-gray-900 mb-2">Our integrated approach ensures:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Seamless integration between hardware and firmware</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Optimized system performance and reliability</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Faster time-to-market with reduced development risks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Embedded Design Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hardware Design */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-emerald-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Cpu className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Hardware Design</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Comprehensive hardware engineering from architecture to production-ready PCB design.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Schematic capture and PCB layout</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Component selection and sourcing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Signal integrity and EMC design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Power management design</span>
                </li>
              </ul>
            </div>
            
            {/* Firmware Integration */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-emerald-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Server className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Firmware Integration</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Seamless integration of firmware with hardware for optimized performance and reliability.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Hardware abstraction layers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Board support packages</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Peripheral driver development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">System optimization and testing</span>
                </li>
              </ul>
            </div>
            
            {/* Prototyping & Validation */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-emerald-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Layers className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Prototyping & Validation</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Rapid prototyping and comprehensive testing to validate designs and reduce development risks.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Proof-of-concept prototypes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Functional testing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Performance validation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Environmental testing support</span>
                </li>
              </ul>
            </div>
            
            {/* Production Support */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-emerald-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Workflow className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Production Support</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Support services to ensure smooth transition from design to manufacturing.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Design for Manufacturing (DFM)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Manufacturing documentation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Production test development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">Manufacturing liaison</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our End-to-End Development Process</h2>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-emerald-200 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12 relative">
              {/* Step 1 */}
              <div className="md:grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="mb-4 inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                    Step 1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Requirements Analysis</h3>
                  <p className="text-gray-600">
                    We begin by thoroughly understanding your project needs, constraints, and objectives.
                    This phase includes market research, technical feasibility assessment, and establishment
                    of key performance indicators.
                  </p>
                </div>
                <div className="mt-6 md:mt-0 relative">
                  <div className="hidden md:block absolute left-0 top-1/2 w-4 h-4 bg-emerald-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                  <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-gray-600">Technical specifications</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-gray-600">Platform selection</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-gray-600">Cost and timeline estimation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="md:grid md:grid-cols-2 gap-8 items-center">
                <div className="order-last md:order-first mt-6 md:mt-0 relative">
                  <div className="hidden md:block absolute right-0 top-1/2 w-4 h-4 bg-emerald-600 rounded-full transform translate-x-1/2 -translate-y-1/2 z-10"></div>
                  <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-gray-600">Circuit architecture</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-gray-600">Component selection</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-gray-600">Firmware architecture design</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="mb-4 inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                    Step 2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">System Architecture Design</h3>
                  <p className="text-gray-600">
                    We create the system architecture, defining hardware components, firmware structure,
                    and interfaces. This phase establishes the foundation for both hardware and software development.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="md:grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="mb-4 inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                    Step 3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Hardware & Firmware Development</h3>
                  <p className="text-gray-600">
                    Our team works in parallel on hardware design and firmware development, with regular integration
                    points to ensure compatibility and system optimization.
                  </p>
                </div>
                <div className="mt-6 md:mt-0 relative">
                  <div className="hidden md:block absolute left-0 top-1/2 w-4 h-4 bg-emerald-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                  <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-gray-600">Schematic design & PCB layout</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-gray-600">Driver development</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-gray-600">Application firmware coding</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="md:grid md:grid-cols-2 gap-8 items-center">
                <div className="order-last md:order-first mt-6 md:mt-0 relative">
                  <div className="hidden md:block absolute right-0 top-1/2 w-4 h-4 bg-emerald-600 rounded-full transform translate-x-1/2 -translate-y-1/2 z-10"></div>
                  <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-gray-600">Prototype assembly</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-gray-600">Hardware validation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-gray-600">Firmware verification</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="mb-4 inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                    Step 4
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Prototyping & Testing</h3>
                  <p className="text-gray-600">
                    We build and test prototypes to validate design decisions, identify issues early,
                    and ensure that the system meets your requirements before moving to production.
                  </p>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="md:grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="mb-4 inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                    Step 5
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Production & Deployment</h3>
                  <p className="text-gray-600">
                    We prepare production-ready documentation, support manufacturing setup, and assist with
                    field deployment to ensure your embedded system is successfully brought to market.
                  </p>
                </div>
                <div className="mt-6 md:mt-0 relative">
                  <div className="hidden md:block absolute left-0 top-1/2 w-4 h-4 bg-emerald-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                  <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-gray-600">Manufacturing documentation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-gray-600">Production test development</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-gray-600">Field support and maintenance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Featured End-to-End Project</h2>
          
          <div className="bg-white rounded-xl shadow-sm p-8 border border-emerald-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                src="/images/parcel-point/locker/1.jpeg"
                alt="ParcelPoint System"
                className="rounded-lg shadow-sm"
              />
              <div>
                <div className="mb-4 inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                  End-to-End Solution
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">ParcelPoint Smart Locker System</h3>
                <p className="text-gray-600 mb-6">
                  The ParcelPoint project showcases our comprehensive embedded systems design capabilities.
                  We delivered a complete solution from custom PCB design to optimized firmware and intuitive HMI.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Custom mainboard with STM32F7 microcontroller',
                    'Motor driver circuit for electronic locks',
                    'Power management for battery operation',
                    'RTOS-based firmware with secure communication',
                    'Touchscreen HMI with LVGL',
                    'Full production documentation and support'
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
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Start Your Embedded Systems Project</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Ready to bring your embedded systems concept to life? Let's discuss how our end-to-end
            design capabilities can help realize your vision.
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

export default EmbeddedSystemsDesignPage;