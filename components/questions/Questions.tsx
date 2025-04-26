"use client"

import { Accordion } from "radix-ui";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export const Questions = () => {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  const handleValueChange = (value: string) => {
    setOpenItem(value);
    console.log("Pregunta abierta:", value);
  };

  return (
    <section className="container mx-auto max-w-[1200px] px-4 mb-16">
        <h3 className="text-center text-in-title-base font-in-playfair text-3xl md:text-4xl lg:text-5xl mb-10">Preguntas Frecuentes</h3>
        <Accordion.Root
            type="single"
            collapsible
            onValueChange={handleValueChange}
            value={openItem}
            className="accordion-root"
        >  
        <div className="md:flex space-y-4 md:space-y-0 gap-4">
            <div className="md:w-1/2 space-y-4">
                <Accordion.Item className="bg-white shadow-lg rounded-lg w-full text-left" value="item-1">
                    <Accordion.Trigger className="w-full text-left flex p-4 justify-between items-center cursor-pointer">
                        <p>¿Es seguro?</p>
                        <IoIosArrowDown className={`text-in-title-base transition-transform duration-300 ${openItem === "item-1" ? "rotate-180" : ""}`} />
                    </Accordion.Trigger>
                    <Accordion.Content className="accordion-content">
                        <div className="px-4 pb-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            </p>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item className="bg-white shadow-lg rounded-lg w-full text-left" value="item-2">
                    <Accordion.Trigger className="w-full text-left flex p-4 justify-between items-center cursor-pointer">
                        <p>¿Es seguro?</p>
                        <IoIosArrowDown className={`text-in-title-base transition-transform duration-300 ${openItem === "item-2" ? "rotate-180" : ""}`} />
                    </Accordion.Trigger>
                    <Accordion.Content className="accordion-content">
                        <div className="px-4 pb-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            </p>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item className="bg-white shadow-lg rounded-lg w-full text-left" value="item-3">
                    <Accordion.Trigger className="w-full text-left flex p-4 justify-between items-center cursor-pointer">
                        <p>¿Es seguro?</p>
                        <IoIosArrowDown className={`text-in-title-base transition-transform duration-300 ${openItem === "item-3" ? "rotate-180" : ""}`} />
                    </Accordion.Trigger>
                    <Accordion.Content className="accordion-content">
                        <div className="px-4 pb-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            </p>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
            </div>
            <div className="md:w-1/2 space-y-4">
                <Accordion.Item className="bg-white shadow-lg rounded-lg w-full text-left" value="item-4">
                    <Accordion.Trigger className="w-full text-left flex p-4 justify-between items-center cursor-pointer">
                        <p>¿Es seguro?</p>
                        <IoIosArrowDown className={`text-in-title-base transition-transform duration-300 ${openItem === "item-4" ? "rotate-180" : ""}`} />
                    </Accordion.Trigger>
                    <Accordion.Content className="accordion-content">
                        <div className="px-4 pb-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            </p>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item className="bg-white shadow-lg rounded-lg w-full text-left" value="item-5">
                    <Accordion.Trigger className="w-full text-left flex p-4 justify-between items-center cursor-pointer">
                        <p>¿Es seguro?</p>
                        <IoIosArrowDown className={`text-in-title-base transition-transform duration-300 ${openItem === "item-5" ? "rotate-180" : ""}`} />
                    </Accordion.Trigger>
                    <Accordion.Content className="accordion-content">
                        <div className="px-4 pb-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            </p>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item className="bg-white shadow-lg rounded-lg w-full text-left" value="item-6">
                    <Accordion.Trigger className="w-full text-left flex p-4 justify-between items-center cursor-pointer">
                        <p>¿Es seguro?</p>
                        <IoIosArrowDown className={`text-in-title-base transition-transform duration-300 ${openItem === "item-6" ? "rotate-180" : ""}`} />
                    </Accordion.Trigger>
                    <Accordion.Content className="accordion-content">
                        <div className="px-4 pb-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            </p>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
            </div>
        </div>
        </Accordion.Root>
        
        
    </section>
  ) 
}