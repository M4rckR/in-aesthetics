'use client'

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle, 
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { useInhaesteticsData } from "@/store/InhaesteticsData"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useEffect, useRef } from "react"
import { FaRegCalendarAlt } from "react-icons/fa"
import { IoTimeOutline } from "react-icons/io5"

const formSchema = z.object({
    name: z.string().min(3, { message: "El nombre es requerido" }),
    email: z.string().email({ message: "Ingrese un correo válido" }),
    phone: z.string().min(8, { message: "Ingrese un número de teléfono válido" }),
    date: z.string().min(1, { message: "Seleccione una fecha" }),
    time: z.string().min(1, { message: "Seleccione una hora" }),
})

type FormValues = z.infer<typeof formSchema>

export const ContactForm = () => {
    const { isOpen, closeDialog } = useInhaesteticsData();
    const formRef = useRef<HTMLFormElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);
    
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
        },
    });

    // Handle keyboard visibility to ensure fields remain visible
    useEffect(() => {
        if (!isOpen) return;

        const handleFocus = (e: FocusEvent) => {
            // Add a small delay to allow the keyboard to appear
            setTimeout(() => {
                if (dialogRef.current && e.target instanceof HTMLElement) {
                    // Get the position of the focused element
                    const targetRect = e.target.getBoundingClientRect();
                    
                    // Calculate if the element is near the bottom of the viewport
                    const viewportHeight = window.innerHeight;
                    const elementBottom = targetRect.bottom;
                    
                    // If the element is in the bottom half of the screen, scroll to it
                    if (elementBottom > viewportHeight * 0.5) {
                        // Get the input's container for better positioning
                        const formItem = e.target.closest('.form-item');
                        if (formItem) {
                            formItem.scrollIntoView({ 
                                behavior: 'smooth', 
                                block: 'center'
                            });
                        } else {
                            e.target.scrollIntoView({ 
                                behavior: 'smooth', 
                                block: 'center'
                            });
                        }
                    }
                }
            }, 400);
        };

        const inputs = formRef.current?.querySelectorAll('input');
        inputs?.forEach(input => {
            input.addEventListener('focus', handleFocus as EventListener);
        });

        return () => {
            const inputs = formRef.current?.querySelectorAll('input');
            inputs?.forEach(input => {
                input.removeEventListener('focus', handleFocus as EventListener);
            });
        };
    }, [isOpen]);

    const onSubmit = (data: FormValues) => {
        console.log(data);
        // Aquí puedes agregar la lógica para enviar los datos
        // closeDialog(); // Opcional: cerrar el diálogo después de enviar
    };

    return (
        <Dialog open={isOpen} onOpenChange={closeDialog}>
          <DialogContent 
            ref={dialogRef}
            className="sm:max-w-[540px] w-[95%] max-h-[80vh] md:max-h-[90vh] overflow-y-auto pb-8"
          >
            <DialogHeader className="mb-2">
              <VisuallyHidden>
                <DialogTitle>¡Reserva tu cita!</DialogTitle>
              </VisuallyHidden>
            </DialogHeader>
            <Form {...form}>
              <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 md:gap-4 py-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="form-item">
                      <FormControl>
                        <Input 
                          placeholder="Nombres y Apellidos" 
                          className="border-in-blue-base py-6 placeholder:text-base" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />
                {/* Stack fields vertically on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormControl>
                          <Input 
                            placeholder="Correo Electrónico" 
                            className="border-in-blue-base py-6 placeholder:text-base" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormControl>
                          <Input 
                            type="tel"
                            placeholder="Teléfono" 
                            className="border-in-blue-base py-6 placeholder:text-base" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                </div>
                {/* Stack fields vertically on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-4">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormControl>
                          <div className="relative">
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-in-blue-base">
                              <FaRegCalendarAlt size={20} className="text-in-orange-base" />
                            </div>
                            <Input 
                              type="date"
                              className="border-in-blue-base py-6 pl-3 placeholder:text-base" 
                              {...field} 
                            />
                            <span className="absolute text-base  text-in-title-base/80 left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                              {!field.value && "Fecha"}
                            </span>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormControl>
                          <div className="relative">
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-in-blue-base">
                              <IoTimeOutline size={20} className="text-in-orange-base" />
                            </div>
                            <Input 
                              type="time"
                              className="border-in-blue-base py-6 pl-3 placeholder:text-base" 
                              {...field} 
                            />
                            <span className="absolute text-base  text-in-title-base/80 left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                              {!field.value && "Horario"}
                            </span>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                </div>
                <button 
                  type="submit" 
                  className="bg-in-brown transition-all duration-300 hover:bg-in-brown/80 text-white py-3 px-12 block text-center rounded-4xl w-full cursor-pointer mt-4"
                >
                  ¡Reserva tu cita ahora!
                </button>
              </form>
            </Form>
            <p className="text-in-blue-base text-sm">Al llenar el formulario, Ud. acepta los Términos y Condiciones / Política de Privacidad</p>
          </DialogContent>
        </Dialog>
      )
}
